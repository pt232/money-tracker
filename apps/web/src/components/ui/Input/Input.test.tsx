import { render } from "@testing-library/react";
import { MdClose } from "react-icons/md";
import Input from "./Input";
import styles from "./Input.module.css";

describe("Input", () => {
  it("applies the correct variant class", () => {
    const { container } = render(<Input variant="subtle" />);
    expect(container.firstChild).toHaveClass(styles["input-subtle"]);
  });

  it("renders an icon", () => {
    const icon = <MdClose data-testid="test-icon" />;
    const { getByTestId } = render(<Input icon={icon} />);
    expect(getByTestId("test-icon")).toBeInTheDocument();
  });

  it("applies the error class", () => {
    const { container } = render(<Input hasError />);
    expect(container.firstChild).toHaveClass(styles.error);
  });
});
