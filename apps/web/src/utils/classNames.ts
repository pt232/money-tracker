type ClassName = string | Record<string, boolean>;

export default function classNames(...classes: ClassName[]) {
  return classes
    .map((className) => {
      if (typeof className === "string") return className;
      return Object.entries(className)
        .filter(([, isClassApplied]) => isClassApplied)
        .map(([name]) => name);
    })
    .join(" ")
    .trim();
}
