import { motion } from "framer-motion";

interface PageDescriptionProps {
    title: string;
    description: string;
}
export default function PageDescription({ title, description }: PageDescriptionProps) {
    return (
        <section>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-3 text-center"
            >
                {
                    title
                }
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-lg"
            >
                {
                    description
                }
            </motion.p>
        </section>
    )
}