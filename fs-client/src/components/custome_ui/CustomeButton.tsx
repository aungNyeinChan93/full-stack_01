import React, { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const CustomeButton = ({
  variant,
  children,
  className,
}: {
  children: ReactNode;
  className: string;
} & ButtonProps) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className={buttonStyles({ variant: variant, className })}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default CustomeButton;

const buttonStyles = tv({
  base: "px-4 py-2 rounded my-2",
  variants: {
    variant: {
      primary: "bg-gray-400 text-white",
      secondary: "bg-indigo-400 text-white",
      danger: "bg-red-400 text-white",
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
