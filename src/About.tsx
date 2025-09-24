import profile from './assets/profile.jpg';

// Create a section with title "About" and some placeholder text. Use Tainlwind CSS for styling.
export default function About() {
    return (
        <section className="bg-white shadow-lg rounded-xl max-w-4xl mx-auto p-8 mt-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile image can be any image or icons from tailwind css */}
                <img
                    src={profile}
                    alt="Milan M K"
                    className="w-75 h-75 rounded-full object-cover border-4 border-blue-500 mb-6 md:mb-0"
                />
            <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-700 mb-4">
                Hi, I’m <span className="font-semibold">Milan M K</span> 👋, a Web Developer with 9 years of experience building scalable and robust applications using .NET technologies. My expertise spans full-stack development, including .NET Core, SQL Server, Angular, JavaScript, and reusable web components.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                I have contributed to diverse domains such as Professional Services, Travel & Tourism, and Managed Print Services, consistently delivering solutions that drive business value. I am passionate about writing clean, efficient code and enjoy working on end-to-end product development, from backend logic to user-friendly frontends.
                </p>
                <a
                href="https://www.linkedin.com/in/milan-mk-35a06473/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                >
                View LinkedIn Profile
                </a>
            </div>
            </div>
        </section>
    )
}