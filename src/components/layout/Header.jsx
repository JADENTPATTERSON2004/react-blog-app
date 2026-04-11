import { useContext } from "react";
import blogLogo from "../../assets/blogbook.png";
import Navbar from "./Navbar";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`border-b shadow-sm ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={blogLogo}
            alt="Blog logo"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <h1
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Jaden Patterson
            </h1>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Stories, ideas, and updates
            </p>
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;