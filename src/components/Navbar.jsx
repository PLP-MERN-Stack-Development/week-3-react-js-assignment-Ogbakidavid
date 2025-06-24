import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white dark:bg-zinc-900 dark:text-zinc-100 p-4 flex justify-between items-start">
            <div className="flex flex-col items-start space-y-4">
                <Link to="/" className="font-bold text-2xl">
                Task Manager
            </Link>

            <ul className="space-x-4 flex items-center">
                <Link to="/">Home</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/posts">Posts</Link>
            </ul>

            </div>
            <ThemeContext/>
        </nav>
    );
}
