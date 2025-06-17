import React, { useState, useEffect } from "react";
import useTheme from "../context/Theme";

export default function ThemeButton() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onChangeBtn = (e) => {

    setTheme(e.target.checked ? "dark" : "light");
  };

  // const { themeMode, lightTheme, darkTheme } = useTheme();

  // const onChangeBtn = (e) => {
  //   const darkModeStatus = e.currenttarget.checked;
  //   if (darkModeStatus) {
  //     darkTheme();
  //   } else {
  //     lightTheme();
  //   }
  // };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={theme === "dark"}
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Toggle Theme
      </span>
    </label>
  );
}
