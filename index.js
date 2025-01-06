const data = [
    {
        id: 1,
        title: "Music Brief",
        description:
            "Creating a music project or composing a song involves countless decisions, and our capacity to make good decisions each day is limited. That’s where Music Brief comes in! This project helps kickstart your music-making process by generating randomized starting points for your creative journey.With Music Brief, you’ll get a name, tempo, musical scale, arrangement, deadline, and more—all at the click of a button. Plus, you can easily export your generated ideas as a PDF, so you’re ready to dive straight into creating.",
        techStack: ["ReactJS", "JavaScript", "HTML", "CSS", "Vercel"],
        links: {
            "Project Repo": "https://github.com/aras72h/music-brief-react",
            "Live Demo": "https://music-brief-react.vercel.app/",
        },
    },
    {
        id: 2,
        title: "Notes RESTful API",
        description:
            "A Note-Taking API built with Node.js, Express, Sequelize, and PostgreSQL. It supports user registration, authentication, and CRUD operations for notes, notebooks, and tags. Features secure password hashing with bcrypt and JWT for authentication.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: {
            "Project Repo": "https://github.com/aras72h/notes-api",
        },
    },
    {
        id: 3,
        title: "Blog RESTful API",
        description:
            "A Blog API built with Node.js, Express, Sequelize, and PostgreSQL. It supports user registration, authentication, and CRUD operations for blog posts, and likes. Features secure password hashing with bcrypt and JWT for authentication.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: {
            "Project Repo": "https://github.com/aras72h/simple-blog-api",
        },
    },
    {
        id: 4,
        title: "Authentication RESTful API",
        description:
            "This is a user authentication API built with Node.js, Express, and Sequelize. It allows users to register, log in, update their information, delete their accounts, and manage password recovery.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: {
            "Project Repo": "https://github.com/aras72h/auth-api",
        },
    },
    {
        id: 5,
        title: "Responsive Web Page",
        description:
            "Responsive page showcasing information about Roger Linn, the renowned designer of electronic music products.",
        techStack: ["HTML", "CSS", "Modular Scale"],
        links: {
            "Project Repo": "https://github.com/aras72h/roger-linn",
            "Live Demo": "https://aras72h.github.io/roger-linn/",
        },
    },
    {
        id: 6,
        title: "Interactive Rating Component",
        description:
            "Interactive and Responsive rating component",
        techStack: ["HTML", "CSS", "Modular Scale", "JavaScript"],
        links: {
            "Project Repo": "https://github.com/aras72h/interactive-rating-component",
            "Live Demo": "https://aras72h.github.io/interactive-rating-component/",
        },
    },
    {
        id: 7,
        title: "To-Do API",
        description:
            "RESTful API for managing tasks and lists, built with Node.js, Express, and PostgreSQL. Features user authentication with JWT, and supports CRUD operations for tasks and lists.",
        techStack: ["HTML", "CSS", "Modular Scale"],
        links: {
            "Project Repo": "https://github.com/aras72h/todo-api",
        },
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects");

    if (!projectsContainer) {
        console.error("Projects container not found!");
        return;
    }

    data.forEach((project) => {
        const article = document.createElement("article");
        article.className = "project-card";

        const projectImage = document.createElement("div");
        projectImage.className = "project-image";
        article.appendChild(projectImage);

        const projectDetails = document.createElement("div");
        projectDetails.className = "project-details";
        article.appendChild(projectDetails);

        const projectTitle = document.createElement("h3");
        projectTitle.className = "project-title";
        projectTitle.textContent = project.title;
        projectDetails.appendChild(projectTitle);

        const projectDescription = document.createElement("p");
        projectDescription.className = "project-description";
        projectDescription.textContent = project.description;
        projectDetails.appendChild(projectDescription);

        const techStack = document.createElement("ul");
        techStack.className = "tech-stack";

        project.techStack.forEach((tech) => {
            const li = document.createElement("li");
            li.textContent = tech;
            techStack.appendChild(li);
        });

        projectDetails.appendChild(techStack);

        projectsContainer.appendChild(article);
    });
});
