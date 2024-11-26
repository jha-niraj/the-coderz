import { Code, Cpu, Database, Globe, Server } from "lucide-react";

type DifficultyLevel = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';
export const categories = [
    "All",
    "Foundation",
    "Front-End",
    "Back-End",
    "Full Stack",
    "C",
    "CPP",
    "Java",
    "Python"
]

export const realProjects = [
    {
        id: "html-1",
        title: "Personal Blog Structure",
        description: "Create a multi-page blog structure focusing on semantic HTML elements",
        difficulty: "Beginner",
        tags: ["HTML"],
        guide: {
            description: "Learn proper HTML structure and semantic markup without styling",
            desktopImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            mobileImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            learningOutcomes: [
                "Understanding semantic HTML5 elements",
                "Proper document structure",
                "Accessibility best practices"
            ],
            keyFeatures: [
                "Blog posts list",
                "Individual post pages",
                "About page",
                "Contact form structure"
            ],
            prerequisites: ["Basic understanding of web concepts"],
            skillsGained: [
                "Semantic markup",
                "HTML5 form elements",
                "Document structuring",
                "SEO basics"
            ],
            steps: [
                "Plan website structure",
                "Create homepage with article previews",
                "Build individual blog post template",
                "Add contact form structure"
            ],
            resources: {
                documentation: ["MDN HTML Guide", "W3C HTML Specification"],
                tools: ["VS Code", "HTML Validator"]
            }
        }
    },
    {
        id: "html-2",
        title: "Restaurant Menu System",
        description: "Build a structured menu system for a restaurant with multiple sections",
        difficulty: "Beginner",
        tags: ["HTML"],
        guide: {
            description: "Create a well-structured menu system using proper HTML elements and attributes",
            desktopImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            mobileImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            learningOutcomes: [
                "Table structure usage",
                "List implementation",
                "Content organization"
            ],
            keyFeatures: [
                "Multiple menu categories",
                "Special items highlighting",
                "Nutritional information table",
                "Allergen information"
            ],
            prerequisites: ["HTML basics"],
            skillsGained: [
                "Table structures",
                "List types usage",
                "Content hierarchy",
                "HTML entities"
            ],
            steps: [
                "Create menu sections",
                "Build item lists",
                "Add nutritional tables",
                "Implement allergen information"
            ]
        }
    },
    {
        id: "html-3",
        title: "Educational Course Catalog",
        description: "Develop a course catalog structure with detailed course information",
        difficulty: "Intermediate",
        tags: ["HTML"],
        guide: {
            description: "Build a comprehensive course catalog focusing on content organization",
            desktopImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            mobileImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            learningOutcomes: [
                "Complex content structuring",
                "Description lists usage",
                "Table layouts"
            ],
            keyFeatures: [
                "Course listings",
                "Detailed descriptions",
                "Prerequisites display",
                "Schedule tables"
            ],
            prerequisites: ["Basic HTML knowledge"],
            skillsGained: [
                "Advanced HTML elements",
                "Content organization",
                "Data presentation",
                "Accessibility features"
            ]
        }
    },
    {
        id: "htmlcss-1",
        title: "Portfolio Gallery",
        description: "Create a responsive image gallery with hover effects",
        difficulty: "Beginner",
        tags: ["HTML", "CSS"],
        guide: {
            description: "Build a beautiful gallery with modern CSS features",
            desktopImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            mobileImage: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            learningOutcomes: [
                "CSS Grid mastery",
                "Responsive design",
                "Animation effects"
            ],
            keyFeatures: [
                "Responsive grid layout",
                "Image hover effects",
                "Lightbox functionality",
                "Filter categories"
            ],
            prerequisites: ["Basic HTML", "CSS fundamentals"],
            skillsGained: [
                "CSS Grid",
                "Flexbox",
                "Transitions",
                "Media Queries"
            ],
            steps: [
                "Design grid layout",
                "Implement responsive design",
                "Add hover effects",
                "Create lightbox feature"
            ],
            resources: {
                documentation: ["MDN CSS Guide", "CSS-Tricks Grid Guide"],
                tools: ["VS Code", "Chrome DevTools"]
            }
        }
    }
];