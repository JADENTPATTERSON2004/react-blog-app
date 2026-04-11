import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`border-t py-6 text-center ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800 text-gray-400"
          : "border-gray-200 bg-white text-gray-500"
      }`}
    >
      <p>© 2026 Jaden Patterson. All rights reserved.</p>
    </footer>
  );
}

export default Footer;