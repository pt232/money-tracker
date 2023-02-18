import { useEffect, useState } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "dark-mode";

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedValue) return JSON.parse(savedValue);
    if (window.matchMedia(COLOR_SCHEME_QUERY).matches) return true;

    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);

    if (isDarkMode) {
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, "false");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode: () => setDarkMode((prev) => !prev) };
}
