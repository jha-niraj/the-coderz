/** @type {import('next').NextConfig} */
const nextConfig = {
    runtime: "edge",
    experimental: {
        isrMemoryCacheSize: 0,  // Disable ISR cache
        serverActions: true,    // Enable if using server actions
    },
    images: {
        unoptimized: true
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });

        return config;
    }
};

export default nextConfig;
