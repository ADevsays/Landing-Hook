import { ChangeEvent, MouseEvent } from "react";
import DataInvoicesInput from "./DataInvoicesInput";

interface Props {
    handleChangeService: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> void,
    deleteService: (e: MouseEvent<HTMLButtonElement>)=>void;
}

function FormOnlyService({handleChangeService, deleteService}: Props) {
    
    return (
        <div className="flex mb-3 gap-6 flex-wrap justify-center items-center relative">
            <button onClick={deleteService} className="absolute top-0 right-0 rounded-full p-0 m-0 bg-red-500 w-[22px] h-[22px] flex justify-center items-center pb-1 hover:opacity-80"> <span>x</span> </button>
            <label className="w-full lg:w-[30.5%]">
                Tipo de servicio:
                <select onChange={handleChangeService} defaultValue='Asesoría' name="service" className="w-full text-black p-2 rounded mt-3">
                    <option value='Asesoría'>Asesoría</option>
                    <option value='Desarrollo de software' >Desarrollo de software</option>
                    <option value='Mantenimiento' >Mantenimiento</option>
                </select>
            </label>
            <DataInvoicesInput
                label="Cantidad"
                placeholder="1..."
                type="number"
                name="quantity"
                handleChange={handleChangeService}
                className="w-full lg:w-[30.5%]"
            />
            <DataInvoicesInput
                label="Precio del servicio"
                placeholder="$20.0 (USD)"
                type="number"
                name="price"
                handleChange={handleChangeService}
                className="w-full lg:w-[30.5%]"
            />
        </div>
    );
}

export default FormOnlyService;