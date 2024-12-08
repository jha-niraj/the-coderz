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

export const projectData = [
    {
        "id": "tasktracker",
        "title": "Task Tracker",
        "description": "Build a CLI app to track your tasks and manage your to-do list effectively.",
        "difficulty": "Intermediate" as DifficultyLevel,
        "tags": ["CPP"],
        "techStack": ["CLI", "File Handling", "JSON"],
        "requirements": [
            "Create, read, update, and delete (CRUD) tasks.",
            "Save tasks persistently using JSON files.",
            "Provide options to mark tasks as complete or pending.",
            "Implement error handling for invalid inputs.",
            "Display tasks in a user-friendly manner."
        ],
        "expectedOutput": "A command-line application that allows users to add, edit, delete, and manage tasks. The app should persist data and display tasks categorized by status (completed/pending).",
        "learningBenefits": [
            "Understanding JSON data structure and file handling.",
            "Designing a command-line interface with clear options.",
            "Implementing CRUD operations programmatically.",
            "Error handling and user-friendly interaction design."
        ],
        "evaluationCriteria": [
            "Complete and functional CRUD operations.",
            "Error-free handling of edge cases (e.g., invalid inputs).",
            "Persistent storage implemented using JSON.",
            "Bonus: Add deadlines, task prioritization, or reminders."
        ],
        "extensions": [
            "Implement deadlines and reminders for tasks.",
            "Add categories or tags to organize tasks.",
            "Enable sorting tasks by priority or due date."
        ],
        "prerequisites": [
            "Basic knowledge of programming in C++.",
            "Familiarity with command-line interfaces.",
            "Understanding file handling and JSON structure."
        ],
        "resources": [
            { "name": "JSON Basics", "link": "https://www.json.org/json-en.html" },
            { "name": "File Handling in C++", "link": "https://cplusplus.com/doc/tutorial/files/" }
        ],
        // "certificateLevel": "Level 2 - Intermediate",
        "approvalCriteria": [
            "Complete all CRUD operations as outlined.",
            "Implement persistent data storage using JSON.",
            "Include documentation in a README file."
        ],
        "image": null,
        "category": "Beginner",
    },
    {
        "id": "weatherapp",
        "title": "Weather Web App",
        "description": "Create a weather app using APIs and JavaScript to display live weather information.",
        "difficulty": "Intermediate" as DifficultyLevel,
        "tags": ["Foundation"],
        "techStack": ["JavaScript", "API"],
        "requirements": [
            "Fetch weather data from a public API.",
            "Display the weather for a given city.",
            "Allow users to search for different cities.",
            "Provide details like temperature, humidity, and weather condition.",
            "Ensure responsiveness of the UI for mobile and desktop devices."
        ],
        "expectedOutput": "A weather application that displays current weather information based on the user's selected city. It should support searching for different cities and provide relevant weather details.",
        "learningBenefits": [
            "Learning how to interact with APIs using JavaScript.",
            "Working with JSON data for dynamic web applications.",
            "Designing responsive UI layouts that work across different devices."
        ],
        "evaluationCriteria": [
            "Correctly display weather data for different cities.",
            "Proper error handling for invalid city input.",
            "Responsive design for both mobile and desktop devices.",
            "Bonus: Add weather icons and forecast information."
        ],
        "extensions": [
            "Add a forecast feature to display weather for the next few days.",
            "Allow users to save their favorite cities and quickly access them."
        ],
        "prerequisites": [
            "Basic knowledge of JavaScript and APIs.",
            "Understanding of HTML and CSS for web design."
        ],
        "resources": [
            { "name": "Weather API Documentation", "link": "https://openweathermap.org/api" },
            { "name": "Using Fetch API in JavaScript", "link": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" }
        ],
        // "certificateLevel": "Level 3 - Advanced",
        "approvalCriteria": [
            "Correctly implement API calls to fetch weather data.",
            "Design a responsive user interface.",
            "Include error handling and a clean UI."
        ],
        "image": "https://via.placeholder.com/200x400?text=Mobile+View+Weather+App",
        "category": "Intermediate",
    },
    {
        "id": "githubrepofinder",
        "title": "GitHub Random Repository Finder",
        "description": "Create a project that fetches a random repository from the GitHub API.",
        "difficulty": "Intermediate" as DifficultyLevel,
        "tags": ["Foundation"],
        "techStack": ["JavaScript", "API Integration"],
        "requirements": [
            "Make an API request to GitHub to fetch random repositories.",
            "Display repository details like name, description, and stars.",
            "Allow users to refresh and get a new random repository.",
            "Ensure the application is responsive on mobile and desktop devices."
        ],
        "expectedOutput": "An app that displays a random GitHub repository with its name, description, and star count. Users can refresh the page to view a new repository.",
        "learningBenefits": [
            "Learning how to make API requests and handle responses.",
            "Working with GitHub API and parsing JSON data.",
            "Designing responsive web applications."
        ],
        "evaluationCriteria": [
            "Correctly fetch and display repository data from GitHub.",
            "Implement a refresh feature to get new random repositories.",
            "Responsive design for mobile and desktop views."
        ],
        "extensions": [
            "Add sorting options based on stars or language.",
            "Allow users to filter repositories by programming language."
        ],
        "prerequisites": [
            "Basic knowledge of JavaScript and APIs.",
            "Familiarity with GitHub API documentation."
        ],
        "resources": [
            { "name": "GitHub API Documentation", "link": "https://docs.github.com/en/rest" },
            { "name": "Working with Fetch in JavaScript", "link": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" }
        ],
        // "certificateLevel": "Level 3 - Advanced",
        "approvalCriteria": [
            "Successfully fetch and display random repositories from GitHub.",
            "Implement responsive design for both mobile and desktop."
        ],
        "image": "https://via.placeholder.com/200x400?text=Mobile+View+GitHub+Finder",
        "category": "Intermediate",
    },
    {
        "id": "flashcard",
        "title": "Flash Card",
        "description": "Build a flash card app using JavaScript.",
        "difficulty": "Beginner" as DifficultyLevel,
        "tags": ["Foundation"],
        "techStack": ["JavaScript", "App"],
        "requirements": [
            "Create a set of flash cards with a question and answer on each.",
            "Allow users to flip the cards to reveal the answer.",
            "Implement a button to shuffle the cards.",
            "Ensure that the app works on both mobile and desktop views."
        ],
        "expectedOutput": "A simple flash card app where users can flip cards to view answers and shuffle the cards to change the order.",
        "learningBenefits": [
            "Understanding DOM manipulation in JavaScript.",
            "Building a simple app with user interaction.",
            "Implementing features like shuffling and flipping cards."
        ],
        "evaluationCriteria": [
            "Flash cards must flip to show the answer when clicked.",
            "The shuffle function must change the card order correctly.",
            "Responsive design for both mobile and desktop."
        ],
        "extensions": [
            "Add a timer to test users' memory speed.",
            "Allow users to create their own flashcards by entering questions and answers."
        ],
        "prerequisites": [
            "Basic understanding of HTML, CSS, and JavaScript.",
            "Familiarity with DOM manipulation in JavaScript."
        ],
        "resources": [
            { "name": "JavaScript DOM Manipulation", "link": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" },
            { "name": "Building Simple Apps with JavaScript", "link": "https://www.codecademy.com/learn/paths/web-development" }
        ],
        // "certificateLevel": "Level 2 - Intermediate",
        "approvalCriteria": [
            "Create functional flashcards with shuffling and flipping functionality.",
            "Ensure responsiveness across devices."
        ],
        "image": "https://via.placeholder.com/200x400?text=Mobile+View+Flash+Card+App",
        "category": "Beginner",
    },
    {
        "id": "portfoliowebsite",
        "title": "Portfolio Website",
        "description": "Create a personal portfolio website to showcase your projects and skills.",
        "difficulty": "Intermediate" as DifficultyLevel,
        "tags": ["Foundation"],
        "techStack": ["HTML", "CSS", "JavaScript", "Responsive Design"],
        "requirements": [
            "Design a homepage that introduces yourself and highlights your key skills.",
            "Add a section to display your projects with descriptions and links.",
            "Include a contact form to allow visitors to reach you.",
            "Ensure that the website is fully responsive and looks good on all devices."
        ],
        "expectedOutput": "A fully responsive portfolio website with sections for an introduction, projects, and a contact form.",
        "learningBenefits": [
            "Learning how to design a personal website using HTML and CSS.",
            "Understanding responsive design for different screen sizes.",
            "Improving JavaScript skills by adding interactivity to the portfolio."
        ],
        "evaluationCriteria": [
            "The website must be fully responsive and functional on both mobile and desktop.",
            "A contact form should be implemented, with basic validation.",
            "Project section should showcase work with descriptions and links."
        ],
        "extensions": [
            "Add an animation to introduce each section when it is scrolled into view.",
            "Include social media links and a blog section."
        ],
        "prerequisites": [
            "Basic knowledge of HTML, CSS, and JavaScript.",
            "Familiarity with responsive design principles."
        ],
        "resources": [
            { "name": "Responsive Web Design Basics", "link": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
            { "name": "HTML Forms", "link": "https://developer.mozilla.org/en-US/docs/Learn/Forms" }
        ],
        // "certificateLevel": "Level 3 - Advanced",
        "approvalCriteria": [
            "Complete a responsive portfolio website with working forms and project sections.",
            "Implement JavaScript for dynamic behavior."
        ],
        "image": "https://via.placeholder.com/200x400?text=Mobile+View+Portfolio+Website",
        "category": "resumeworthy/certificates",
    }
]

