import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-end px-4 py-2 bg-gray-200 border-b">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/owner" className="hover:underline">Owner</Link>
      </div>
    </nav>
  );
}

export default Navbar;
