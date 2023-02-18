import { act, renderHook } from "@testing-library/react";
import useDarkMode from "../useDarkMode";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "dark-mode";

describe("useDarkMode", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === COLOR_SCHEME_QUERY,
      })),
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("returns local storage value", () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "false");

    const { result } = renderHook(useDarkMode);

    expect(result.current.isDarkMode).toBe(false);
  });

  it("returns preferred system value", () => {
    const { result } = renderHook(useDarkMode);

    expect(result.current.isDarkMode).toBe(true);
  });

  it("toggles dark mode", () => {
    const { result } = renderHook(useDarkMode);

    expect(result.current.isDarkMode).toBe(true);

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDarkMode).toBe(false);
  });
});
