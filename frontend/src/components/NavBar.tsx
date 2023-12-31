import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-center my-1">
      <Link
        className="inline-block border-black bg-stone-600 hover:bg-stone-500 text-center font-bold py-2 w-20 m-2 text-white rounded-3xl"
        to="/"
      >
        Main
      </Link>
      <Link
        className="inline-block border-black bg-stone-600 hover:bg-stone-500 text-center font-bold py-2 w-20 m-2 text-white rounded-3xl"
        to="/admin"
      >
        Admin
      </Link>
    </nav>
  );
}

export default NavBar;
