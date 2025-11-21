import React, { ReactNode } from "react";
import { tv, VariantProps, ClassValue } from "tailwind-variants";

// variant style
const buttonStyles = tv({
  base: "px-4 py-2 rounded my-2",
  variants: {
    variant: {
      primary: "bg-gray-400 text-white",
      secondary: "bg-indigo-400 text-white",
      danger: "bg-red-400 text-white",
      pink: "bg-pink-600 text-white",
    },
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      large: "text-lg !border-indigo-500",
    },
  },
  defaultVariants: {
    variant: "primary",
    fontSize: "sm",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles>;

const CustomeButton = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: ClassValue;
} & ButtonProps &
  React.ComponentProps<"button">) => {
  return (
    <React.Fragment>
      <button {...props} type="button" className={buttonStyles({ ...props })}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default CustomeButton;
