import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/books">Books</Link> |{" "}
      <Link to="/members">Members</Link> |{" "}
      <Link to="/issues">Issues</Link>
    </nav>
  );
};

export default Navbar;
