import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props } : ButtonProps) => {
  return (
    <button
      className='h-12 flex shadow-sm items-center justify-center border-[1px] border-solid border-gray-200 flex-shrink-0 overflow-hidden
      bg-transparent hover:bg-[#f6f8fa] active:bg-[#eff1f3] duration-100 px-4 py-2 gap-x-2'
      {...props}
    >
      {children}
    </button>
  );
};
