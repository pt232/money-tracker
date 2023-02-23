import { screen } from "@testing-library/react";
import renderWithRouter from "@/utils/renderWithRouter";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders light logo when isDarkMode is true", () => {
    renderWithRouter(
      <Sidebar isActive isDarkMode setSidebarActive={() => {}} />,
    );

    const logo: HTMLImageElement = screen.getByAltText("Logo");
    expect(logo.src).toContain("logo-dark.svg");
  });

  it("renders dark logo when isDarkMode is false", () => {
    renderWithRouter(
      <Sidebar isActive isDarkMode={false} setSidebarActive={() => {}} />,
    );

    const logo: HTMLImageElement = screen.getByAltText("Logo");
    expect(logo.src).toContain("logo-light.svg");
  });

  it("calls setSidebarActive function on close button", async () => {
    const setSidebarActive = vi.fn();
    const { user } = renderWithRouter(
      <Sidebar
        isActive
        isDarkMode={false}
        setSidebarActive={setSidebarActive}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /close menu/i,
      }),
    );

    expect(setSidebarActive.mock.calls).toHaveLength(1);
  });
});
