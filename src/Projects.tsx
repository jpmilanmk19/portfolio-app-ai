import React from "react";
import projectsData from './assets/projects.json';

// Create a section with title "Projects" and some placeholder text. Use Tainlwind CSS for styling.
type Project = {
    year: number;
    title: string;
    description?: string;
    technologies?: string[];
};

export default function Projects() {
    const [projects, setProjects] = React.useState<Project[]>([]);

   // A function to fetch projects from assets/projects.json. Sort the projects by date in descending order and return the sorted array.

const fetchProjects = async () => {
    // Ensure year is always a number
    const normalizedProjects = projectsData.map((project: any) => ({
        ...project,
        year: typeof project.year === "string" ? parseInt(project.year, 10) : project.year
    }));
    return normalizedProjects.sort((a: Project, b: Project) => b.year - a.year);
};

   // call fetchProjects when the user clicks on Projects link in the navbar. Store the projects in a state variable and display them in a list.

   React.useEffect(() => {
       const getProjects = async () => {
           const projects = await fetchProjects();
           setProjects(projects);
       };
       getProjects();
   }, []);  

    return (
        <div className="max-w-4xl mx-auto p-4 mt-16">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            {/* <p className="text-lg leading-relaxed">This is the projects section of the portfolio website. Here you can include information about your projects, the technologies used, and the challenges faced.</p> */}

            {/* Display the projects in a list with year and title. Each project should be tailwind styled card. If there are no projects, display a message saying "No projects found". let each project card takes the fill width of the section */}
            {projects.length === 0 ? (
                <p className="text-lg leading-relaxed">No projects found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600">{project.year}</p>
                            {project.description && <p className="mt-2 text-gray-800">{project.description}</p>}
                            {project.technologies && (
                                <div className="mt-2">
                                    <h4 className="font-semibold">Technologies Used:</h4>
                                    {/* Technologies to be displayed as modern items instead of bullet points. It should be coloured */}
                                    <ul className="flex flex-wrap gap-2 mt-1">
                                        {project.technologies.map((tech, index) => (
                                            <li key={index} className="bg-blue-100 text-blue-600 py-1 px-2 rounded-md">{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}