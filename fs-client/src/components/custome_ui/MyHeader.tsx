import React, { ReactNode } from "react";
import { ClassValue, tv, VariantProps } from "tailwind-variants";

const myheaderVariant = tv({
  base: "p-4 border border-red-600 rounded sm:w-sm lg:w-lg xl:w-[1200px] mx-auto",
  variants: {
    bgColor: {
      green: "bg-green-500",
      red: "bg-red-500",
      blue: "bg-indigo-500",
      sky: "bg-sky-500",
    },
    // disable:true ? 'opacity-1/2'
  },
});

type MyHeaderProps = VariantProps<typeof myheaderVariant>;

type Props = {
  className?: ClassValue;
  children?: ReactNode;
} & MyHeaderProps &
  React.ComponentProps<"div">;

const MyHeader = ({ className, children, ...props }: Props) => {
  return (
    <React.Fragment>
      <div {...props} className={myheaderVariant({ ...props, className })}>
        {children || "Banner"}
      </div>
    </React.Fragment>
  );
};

export default MyHeader;
