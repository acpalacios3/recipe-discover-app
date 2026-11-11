import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {


    // store the search text
  const [searchText, setSearchText] = useState("");

  // navigate to another page
  const navigate = useNavigate();

  // handle search form
  const handleSearch = (event) => {
    event.preventDefault();

    if (searchText.trim() === "") {
      return;
    }

    // navigate to search page with query parameter
    navigate(`/search?query=${searchText}`);

    // clear input
    setSearchText("");
  };

  return (
    <nav className="navbar">

       <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        {/* <button type="submit">Search</button> */}
      </form>

    </nav>
  );
}