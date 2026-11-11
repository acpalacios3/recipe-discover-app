import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    // Navigate to another page
    const navigate = useNavigate();

    return (
        <nav className="navbar">

            {/* Navigation links */}
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>

        </nav>
    );
}