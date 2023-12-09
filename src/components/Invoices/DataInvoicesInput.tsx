import {ChangeEvent} from 'react';
interface Props{
    label: string, 
    type?: string,
    placeholder: string,
    name:string,
    className?:string,
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void
}
function DataInvoicesInput({label, type='text', placeholder, name, handleChange, className='w-full lg:w-[48%]'}: Props) {
    return (
        <label className={`flex flex-col gap-3 ${className}`}>
            <span>{label}:</span>
            <input onInput={handleChange} name={name} className="p-2 rounded-lg outline-none text-black" type={type} placeholder={placeholder}/>
        </label>
    );
}

export default DataInvoicesInput;