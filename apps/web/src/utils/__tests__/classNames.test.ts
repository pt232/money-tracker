import classNames from "../classNames";

describe("classNames", () => {
  it("returns string of class from array of one class", () => {
    expect(classNames("foo")).toBe("foo");
  });

  it("returns string of classes from multiple classes", () => {
    expect(classNames("foo", "bar")).toBe("foo bar");
  });

  it("returns string of classes from multiple classes with conditionals", () => {
    expect(classNames("foo", { bar: true })).toBe("foo bar");
    expect(classNames({ foo: true }, "bar")).toBe("foo bar");
    expect(classNames({ foo: false }, "bar")).toBe("bar");
    expect(classNames({ foo: true }, { bar: true })).toBe("foo bar");
    expect(classNames({ foo: false }, { bar: false })).toBe("");
  });

  it("works with css modules", () => {
    const styles = {
      foo: "foo",
    };

    expect(classNames(styles.foo)).toBe("foo");
    expect(classNames({ [styles.foo]: true })).toBe("foo");
  });
});
