import {ReactNode} from 'react';

interface Props{
    title:string, 
    content:string,
    children: ReactNode,
    className?: string | ''
};

function FooterInfo({title, content, children, className}: Props) {
    return (
        <div className={`w-full lg:w-[33%] md:max-h-[200px] p-10 relative pb-12 ${className}`}>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className='w-[75%] mt-2 opacity-70'>
                {content}
            </p>
            {children}
        </div>
    );
}

export default FooterInfo;