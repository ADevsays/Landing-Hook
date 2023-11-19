import { ReactNode } from "react";

interface Props{
    children: ReactNode,
    className?: string | ''
}
function Button({children, className}:Props) {
    return (
        <button 
            className={`bg-terciary text-secondary p-2 px-3 rounded-xl font-medium ${className}`}>
            {children}
        </button>
    );
}

export default Button;