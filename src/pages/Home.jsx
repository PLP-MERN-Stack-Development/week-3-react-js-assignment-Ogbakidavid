import { Link } from 'react-router-dom';
import { Button } from "../components/Button";

export default function Home() {
    return (
        <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold">Welcome to Week 3 React App 🚀</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore the features below:
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/tasks">
                    <Button variant="primary">Go to Task Manager</Button>
                </Link>
                <Link to="/posts">
                    <Button variant="secondary">View Posts</Button>
                </Link>
            </div>
        </div>
    );
}
