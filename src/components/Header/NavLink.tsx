import { ReactNode } from "react";

interface Props{
    children: ReactNode,
    path:string,
    menuClass?: string | ''
}
function NavLink({children, path, menuClass}:Props) {
    const defaultClasses = 'border-r border-gray-600 px-3 py-1 hover:opacity-70 ' + menuClass;
    const setBorder = children == 'Contacto';

    return (
        <a 
            className={setBorder ? `${defaultClasses} border-r` : defaultClasses} 
            href={path}>
                {children}
        </a>
    );
}

export default NavLink;