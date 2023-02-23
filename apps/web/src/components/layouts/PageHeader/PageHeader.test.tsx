import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("renders the title correctly", () => {
    const title = "Hello World";
    render(
      <PageHeader
        title={title}
        isDarkMode
        setSidebarActive={() => {}}
        toggleDarkMode={() => {}}
      />,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("toggles sidebar and dark mode on click", async () => {
    const setSidebarActive = vi.fn();
    const toggleDarkMode = vi.fn();
    const user = userEvent.setup();

    render(
      <PageHeader
        title=""
        isDarkMode
        setSidebarActive={setSidebarActive}
        toggleDarkMode={toggleDarkMode}
      />,
    );

    const menuBtn = screen.getByRole("button", {
      name: /open menu/i,
    });
    const modeBtn = screen.getByRole("button", {
      name: /use dark mode/i,
    });

    await user.click(menuBtn);
    await user.click(modeBtn);

    expect(setSidebarActive.mock.calls).toHaveLength(1);
    expect(toggleDarkMode.mock.calls).toHaveLength(1);
  });
});
