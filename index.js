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
