const data = [
    {
        id: 1,
        title: "Music Brief",
        description:
            "Creating a music project or composing a song involves countless decisions, and our capacity to make good decisions each day is limited. That’s where Music Brief comes in! This project helps kickstart your music-making process by generating randomized starting points for your creative journey.With Music Brief, you’ll get a name, tempo, musical scale, arrangement, deadline, and more—all at the click of a button. Plus, you can easily export your generated ideas as a PDF, so you’re ready to dive straight into creating.",
        techStack: ["ReactJS", "JavaScript", "HTML", "CSS", "Vercel"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/music-brief-react"
            },
            {
                name: "Live Demo",
                url: "https://music-brief-react.vercel.app/"
            },
        ]
    },
    {
        id: 2,
        title: "Notes RESTful API",
        description:
            "A Note-Taking API built with Node.js, Express, Sequelize, and PostgreSQL. It supports user registration, authentication, and CRUD operations for notes, notebooks, and tags. Features secure password hashing with bcrypt and JWT for authentication.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/notes-api"
            },
        ]
    },
    {
        id: 3,
        title: "Blog RESTful API",
        description:
            "A Blog API built with Node.js, Express, Sequelize, and PostgreSQL. It supports user registration, authentication, and CRUD operations for blog posts, and likes. Features secure password hashing with bcrypt and JWT for authentication.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/simple-blog-api"
            },
        ]
    },
    {
        id: 4,
        title: "Authentication RESTful API",
        description:
            "This is a user authentication API built with Node.js, Express, and Sequelize. It allows users to register, log in, update their information, delete their accounts, and manage password recovery.",
        techStack: ["NodeJS", "JavaScript", "ExpressJS", "PostgreSQL", "JWT Tokens", "bcrypt", "Sequelize ORM"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/auth-api"
            },
        ]
    },
    {
        id: 5,
        title: "Responsive Web Page",
        description:
            "Responsive page showcasing information about Roger Linn, the renowned designer of electronic music products.",
        techStack: ["HTML", "CSS", "Modular Scale"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/roger-linn"
            },
            {
                name: "Live Demo",
                url: "https://aras72h.github.io/roger-linn/"
            },
        ]
    },
    {
        id: 6,
        title: "Interactive Rating Component",
        description:
            "Interactive and Responsive rating component",
        techStack: ["HTML", "CSS", "Modular Scale", "JavaScript"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/interactive-rating-component"
            },
            {
                name: "Live Demo",
                url: "https://aras72h.github.io/interactive-rating-component/"
            },
        ]
    },
    {
        id: 7,
        title: "To-Do API",
        description:
            "RESTful API for managing tasks and lists, built with Node.js, Express, and PostgreSQL. Features user authentication with JWT, and supports CRUD operations for tasks and lists.",
        techStack: ["HTML", "CSS", "Modular Scale"],
        links: [
            {
                name: "Project Repo",
                url: "https://github.com/aras72h/todo-api"
            }
        ]
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

        const imageContainer = document.createElement('div')
        imageContainer.className = 'image-container'
        article.appendChild(imageContainer)

        const projectImage = document.createElement("canvas");
        projectImage.width = 800
        projectImage.height = 400
        generateImg(projectImage)
        projectImage.className = "project-image";
        imageContainer.appendChild(projectImage);

        const projectDetails = document.createElement("div");
        projectDetails.className = "project-details";
        article.appendChild(projectDetails);

        const projectTitle = document.createElement("h3");
        projectTitle.className = "project-title";
        projectTitle.textContent = project.title;
        projectDetails.appendChild(projectTitle);

        const projectDescription = document.createElement("p");
        projectDescription.className = "project-description";
        const description = project.description
        const wc = description.split(' ').length
        /* Implements read more... option */
        if (wc > 15) {
            const shortText = project.description.slice(0, 90)
            const dots = '...'
            const readMore = document.createElement('button')
            readMore.className = 'more-btn'
            readMore.innerText = 'Read More'
            readMore.addEventListener('click', () => {
                projectDescription.textContent = project.description
            })
            projectDescription.textContent = shortText + dots
            projectDescription.appendChild(readMore)
        } else {
            projectDescription.textContent = project.description
        }
        projectDetails.appendChild(projectDescription);

        /* Project links */
        const projectLinks = document.createElement("ul");
        projectLinks.className = 'project-links'

        project.links.forEach((link) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.target = '_blank'
            a.className = 'project-link'
            li.appendChild(a);
            projectLinks.appendChild(li)
        });

        projectDetails.appendChild(projectLinks)

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

const bgImg = document.getElementById('bg-img')
bgImg.width = 4000
bgImg.height = 4000
generateImg(bgImg)


function generateImg(canvas) {
    // const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');
    const canvasSize = canvas.width;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomStrokeWidth() {
        // Stroke width variation between 2 and 5
        return getRandomInt(1, 1.5);
    }

    function drawLine(x, y, length, angle) {
        const x2 = x + length * Math.cos(angle);
        const y2 = y + length * Math.sin(angle) * 7;

        ctx.beginPath();
        ctx.strokeStyle = '#FD7E14'; // Set fixed color
        ctx.lineWidth = getRandomStrokeWidth();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function drawFilledRectangle(x, y, width, height) {
        ctx.beginPath();
        ctx.fillStyle = '#FD7E14'; // Set fixed color
        ctx.fillRect(x, y, width, height);
    }

    function generateArt(pieceCount = 200) {
        ctx.clearRect(0, 0, canvasSize, canvasSize);

        ctx.fillStyle = '#F9F4ED'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        const gridSize = 100; // Grid size
        const cellSize = canvasSize / gridSize; // Grid cell size

        for (let i = 0; i < pieceCount; i++) {
            // Structured position: random within each grid cell
            const baseX = getRandomInt(0, gridSize - 1) * cellSize;
            const baseY = getRandomInt(0, gridSize - 1) * cellSize;

            // Randomly decide to draw either a line or a rectangle
            if (Math.random() > 0.5) {
                // Draw line with random length and angle
                const length = getRandomInt(cellSize / 2, cellSize);
                const angle = getRandomInt(0, 3) * (Math.PI / 2); // Only 90-degree rotations
                drawLine(baseX + getRandomInt(0, cellSize), baseY + getRandomInt(0, cellSize), length, angle);
            } else {
                // Draw filled rectangle with random size
                const width = getRandomInt(cellSize * 6, cellSize);
                const height = getRandomInt(cellSize / 4, cellSize);
                drawFilledRectangle(baseX + getRandomInt(0, cellSize / 2), baseY + getRandomInt(0, cellSize / 2), width, height);
            }
        }
    }

    // Generate art on page load
    return generateArt();

}
