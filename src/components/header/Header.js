import "./Header.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  const handleClassName = (className) => {
    let newClass;
    if (className === theme || className + " activeTheme" === theme) {
      newClass = className + " activeTheme";
    } else {
      newClass = className;
    }
    return newClass;
  };

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.classList;
    setTheme(selectedTheme[0]);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Things to do list" />
        <span>Things to do</span>
      </div>

      <div className="themeSelector">
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("light")}
        ></span>
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("medium")}
        ></span>
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("dark")}
        ></span>
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("gOne")}
        ></span>
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("gTwo")}
        ></span>
        <span
          onClick={(e) => handleThemeChange(e)}
          className={handleClassName("gThree")}
        ></span>
      </div>
    </header>
  );
};
