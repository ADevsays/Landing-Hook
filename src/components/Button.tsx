import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    className?: string | '',
    href?: string,
    target?: string,
    onClick?: (arg0?: any)=>any
}
function Button({ children, className, href, onClick, target}: Props) {
    const defaultClasses = 'p-4 rounded-xl font-medium shadow-lg transition-transform hover:scale-95 ';
    return (
        <>
            {
            !href &&
                <button
                    onClick={onClick}
                    className={`${defaultClasses} ${className}`}>
                    {children}
                </button>
            }
             {
            href &&
                <a  
                    target={target ? target : '_self'}
                    href={href}
                    rel="nofollow"
                    className={`${defaultClasses} ${className}`}>
                    {children}
                </a>
            }
        </>
    );
}

export default Button;