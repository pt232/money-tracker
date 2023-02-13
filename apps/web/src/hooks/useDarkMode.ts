import { useState } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "dark-mode";

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const savedValue = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) as string,
    );

    if (savedValue) return savedValue;
    if (window.matchMedia(COLOR_SCHEME_QUERY).matches) return true;

    return false;
  });

  return { isDarkMode, setDarkMode };
}
