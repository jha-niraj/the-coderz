import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
})

export default withBundleAnalyzer({
    output: 'standalone',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        // Enable tree shaking
        config.optimization = {
            ...config.optimization,
            usedExports: true,
        }

        // Configure chunking
        config.optimization.splitChunks = {
            chunks: 'all',
            minSize: 20000,
            maxSize: 24000000, // Just under 25MB limit
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                default: false,
                vendors: false,
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                },
                lib: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1]
                        return `npm.${packageName.replace('@', '')}`
                    },
                    chunks: 'all',
                    minChunks: 1,
                },
            },
        }

        return config
    },
})