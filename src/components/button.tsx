import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    // const Comp = asChild ? Slot : "button";
    return (
      <button
        className={className}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Button;