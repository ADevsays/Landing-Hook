import {ChangeEvent} from 'react';
interface Props{
    label: string, 
    type?: string,
    placeholder: string,
    name:string,
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void
}
function DataInvoicesInput({label, type='text', placeholder, name, handleChange}: Props) {
    return (
        <label className="flex flex-col gap-3 w-full lg:w-[48%]">
            <span>{label}:</span>
            <input onInput={handleChange} name={name} className="p-2 rounded-lg outline-none text-black" type={type} placeholder={placeholder}/>
        </label>
    );
}

export default DataInvoicesInput;