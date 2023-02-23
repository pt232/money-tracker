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

  it("handles button clicks", async () => {
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

    await user.click(
      screen.getByRole("button", {
        name: "Open Menu",
      }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Use Dark Mode",
      }),
    );

    expect(setSidebarActive.mock.calls).toHaveLength(1);
    expect(toggleDarkMode.mock.calls).toHaveLength(1);
  });
});
