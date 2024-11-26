export const cppProjects = [
    {
        id: 1,
        title: "Task Tracker",
        level: "Beginner to Intermediate",
        tags: ["CLI", "File Handling", "JSON"],
        description: "Build a CLI app to track your tasks and manage your to-do list effectively.",
        requirements: [
            "Create, read, update, and delete (CRUD) tasks.",
            "Save tasks persistently using JSON files.",
            "Provide options to mark tasks as complete or pending.",
            "Implement error handling for invalid inputs.",
            "Display tasks in a user-friendly manner."
        ],
        expectedOutput:
            "A command-line application that allows users to add, edit, delete, and manage tasks. The app should persist data and display tasks categorized by status (completed/pending).",
        learningBenefits: [
            "Understanding JSON data structure and file handling.",
            "Designing a command-line interface with clear options.",
            "Implementing CRUD operations programmatically.",
            "Error handling and user-friendly interaction design."
        ],
        evaluationCriteria: [
            "Complete and functional CRUD operations.",
            "Error-free handling of edge cases (e.g., invalid inputs).",
            "Persistent storage implemented using JSON.",
            "Bonus: Add deadlines, task prioritization, or reminders."
        ],
        extensions: [
            "Implement deadlines and reminders for tasks.",
            "Add categories or tags to organize tasks.",
            "Enable sorting tasks by priority or due date."
        ],
        prerequisites: [
            "Basic knowledge of programming in C++.",
            "Familiarity with command-line interfaces.",
            "Understanding file handling and JSON structure."
        ],
        resources: [
            { name: "JSON Basics", link: "https://www.json.org/json-en.html" },
            { name: "File Handling in C++", link: "https://cplusplus.com/doc/tutorial/files/" }
        ],
        certificateLevel: "Level 2 - Intermediate",
        certificateCriteria: [
            "Complete all CRUD operations as outlined.",
            "Implement persistent data storage using JSON.",
            "Include documentation in a README file."
        ]
    },
    {
        id: 2,
        title: "GitHub User Activity",
        level: "Intermediate",
        tags: ["CLI", "API Integration", "JSON"],
        description: "Use the GitHub API to fetch user activity and display it in the terminal.",
        requirements: [
            "Fetch and display user repositories, commits, and contributions using the GitHub API.",
            "Parse JSON responses from the API.",
            "Handle errors like invalid usernames or rate limits.",
            "Provide options to filter activities (e.g., by date or type)."
        ],
        expectedOutput:
            "A command-line tool that allows users to input a GitHub username and view detailed activity, including repositories and recent commits, with options for filtering.",
        learningBenefits: [
            "Understanding and integrating REST APIs.",
            "Working with JSON responses and parsing data.",
            "Error handling for API limitations and invalid data.",
            "Improving CLI user interface design."
        ],
        evaluationCriteria: [
            "Accurate fetching and displaying of user activity.",
            "Proper handling of errors (e.g., invalid usernames, API rate limits).",
            "Bonus: Include filtering options or additional features like displaying starred repositories."
        ],
        extensions: [
            "Add options to display starred repositories or organizations the user belongs to.",
            "Provide a feature to save user activity data locally as a report.",
            "Support exporting data in JSON or CSV format."
        ],
        prerequisites: [
            "Basic understanding of APIs and HTTP requests.",
            "Familiarity with JSON parsing in C++.",
            "Knowledge of CLI design basics."
        ],
        resources: [
            { name: "GitHub API Documentation", link: "https://docs.github.com/en/rest" },
            { name: "Working with APIs in C++", link: "https://www.cplusplus.com/" }
        ],
        certificateLevel: "Level 2 - Intermediate",
        certificateCriteria: [
            "Complete integration with GitHub API to fetch activity.",
            "Handle all edge cases, including invalid input and API limits.",
            "Include well-structured documentation."
        ]
    },
    {
        id: 3,
        title: "Expense Tracker",
        level: "Beginner to Intermediate",
        tags: ["CLI", "Data Management", "JSON"],
        description: "Build a simple expense tracker to manage your finances.",
        requirements: [
            "Add, edit, and delete expenses.",
            "Categorize expenses (e.g., food, travel, utilities).",
            "Calculate and display total expenses.",
            "Store expense data persistently using JSON."
        ],
        expectedOutput:
            "A command-line application where users can add and categorize expenses, view their total spending, and update or delete entries, with all data saved persistently.",
        learningBenefits: [
            "Understanding data categorization and financial calculations.",
            "Implementing CRUD operations in a CLI app.",
            "Managing persistent data storage with JSON."
        ],
        evaluationCriteria: [
            "Fully functional expense tracking features.",
            "Accurate calculation of totals.",
            "Persistent storage implemented using JSON."
        ],
        extensions: [
            "Add graphical representation of expenses (e.g., pie chart).",
            "Include monthly/weekly expense summaries.",
            "Enable exporting data to a CSV file."
        ],
        prerequisites: [
            "Basic knowledge of programming in C++.",
            "Familiarity with JSON data handling.",
            "Understanding of CLI design."
        ],
        resources: [
            { name: "JSON Basics", link: "https://www.json.org/json-en.html" },
            { name: "File Handling in C++", link: "https://cplusplus.com/doc/tutorial/files/" }
        ],
        certificateLevel: "Level 2 - Intermediate",
        certificateCriteria: [
            "Complete all features outlined in the requirements.",
            "Provide accurate expense calculations and categorization.",
            "Include proper documentation and user instructions."
        ]
    }
];
