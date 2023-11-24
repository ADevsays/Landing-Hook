import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    className?: string | '',
    href?: string
}
function Button({ children, className, href }: Props) {
    const defaultClasses = 'p-4 rounded-xl font-medium shadow-lg transition-transform hover:scale-95 ';
    return (
        <>
            {
            !href &&
                <button
                    className={`${defaultClasses} ${className}`}>
                    {children}
                </button>
            }
             {
            href &&
                <a 
                    href={href}
                    className={`${defaultClasses} ${className}`}>
                    {children}
                </a>
            }
        </>
    );
}

export default Button;