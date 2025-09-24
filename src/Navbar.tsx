// create a navbar component using tailwind css with links to about, projects, contact
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            {/* On small screens, the navbar should be a hamburger menu */}
            <div className="md:hidden">
                <button className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <nav className="fixed top-0 w-full bg-white shadow-md z-10">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center p-4">
                    <h1 className="text-xl font-bold mb-2 md:mb-0">My Portfolio</h1>
                    <div className="space-x-4 flex justify-center">
                        <Link to="/" className="hover:text-blue-500">About Me</Link>
                        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
                        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>

    )

}