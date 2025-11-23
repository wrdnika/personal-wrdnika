import { cn } from "../../lib/utils";

const ShinyButton = ({ text, className = "", href, ...props }) => {
  const Tag = href ? "a" : "span";

  return (
    <Tag
      href={href}
      {...props}
      className={cn(
        "relative rounded-lg py-2 px-4 transition-all duration-300 ease-in-out",
        "before:absolute before:top-0 before:-left-40 before:w-40 before:h-full before:bg-white before:opacity-30 before:blur-md before:transition-all before:duration-700 before:ease-in-out hover:before:left-full",
        "before:transform before:-skew-x-45",
        "flex items-center",
        className
      )}
    >
      {text}
    </Tag>
  );
};

export default ShinyButton;
