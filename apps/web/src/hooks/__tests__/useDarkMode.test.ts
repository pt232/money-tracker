import { renderHook } from "@testing-library/react";
import useDarkMode from "../useDarkMode";

const LOCAL_STORAGE_KEY = "dark-mode";

describe("useDarkMode", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("returns local storage value", () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");

    const { result } = renderHook(useDarkMode);

    expect(result.current.isDarkMode).toBe(true);
  });
});
