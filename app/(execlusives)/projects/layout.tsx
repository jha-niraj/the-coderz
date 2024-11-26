import FooterDescription from "./_components/footerdescroption";

export default function ProjectLayout({ children } : { children: React.ReactNode }) {
    return (
        <section>
            {
                children
            }
            <FooterDescription />
        </section>
    )
}