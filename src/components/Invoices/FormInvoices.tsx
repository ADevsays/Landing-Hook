import defaultDataInvoice from "../../consts/defaultDataInvoice";
import Button from "../Button";
import DataInvoicesInput from "./DataInvoicesInput";
import {useState,ChangeEvent, FormEvent} from 'react';

function FormInvoices({getInvoiceData}: {getInvoiceData: (data: Invoice)=>void}) {
    const [invocesData, setInvocesData] = useState(defaultDataInvoice as Invoice);

    const handleChange = (e:ChangeEvent<HTMLInputElement 
                            | HTMLSelectElement
                            | HTMLTextAreaElement>)=>{
        const input = e.target;
        if(!(input && (input instanceof HTMLInputElement 
                    || input instanceof HTMLSelectElement 
                    || input instanceof HTMLTextAreaElement) )) return;
        const value = input.value;
        const key = input.name;
        const toSendData = {...invocesData};
        const keyOfObj = key as keyof Invoice;
        toSendData[keyOfObj] = value;
        setInvocesData(toSendData);
    };

    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        getInvoiceData(invocesData);
    }

    return (
        <form onSubmit={handleSubmit} className="py-8 w-full lg:w-[700px] mt-12 flex gap-12 flex-col bg-primary p-6 rounded-lg m-4">
            <h3 className="font-bold">Datos de factura</h3>
            <div className="flex gap-6 flex-wrap justify-center items-center">
                <DataInvoicesInput
                    label="Nombre del cliente"
                    placeholder="Carlos Martin..."
                    name="client"
                    handleChange={handleChange}
                />
                 <DataInvoicesInput
                    label="Fecha del servicio"
                    placeholder="Fecha"
                    type="date"
                    name="date"
                    handleChange={handleChange}
                />
            </div>
            <div className="flex gap-6 flex-wrap justify-center items-center">
                <label className="w-full lg:w-[48%]">
                    Tipo de servicio:
                    <select onChange={handleChange} defaultValue='Asesoría' name="service" className="w-full text-black p-2 rounded mt-3">
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
                    handleChange={handleChange}
                />
            </div>
            <div className="flex gap-6 flex-wrap justify-center items-center">
                <DataInvoicesInput
                    label="Método de pago"
                    placeholder="Paypal..."
                    name="payment"
                    handleChange={handleChange}
                />
                 <DataInvoicesInput
                    label="Precio del servicio"
                    placeholder="$20.0 (USD)"
                    type="number"
                    name="price"
                    handleChange={handleChange}
                />
            </div>
            <div className="flex gap-6 flex-wrap justify-center items-center">
                <label className="w-full lg:w-[48%]">
                    Quién recibe:
                    <select  onChange={handleChange} defaultValue='Hook' name="receives" className="w-full text-black p-2 rounded mt-3">
                        <option value='Hook'>Hook</option>
                        <option value='Adevsays' >Adevsays</option>
                        <option value='Mau Webs' >Mau Webs</option>
                    </select>
                </label>
                 <DataInvoicesInput
                    label="Email de cuenta de pago"
                    placeholder="ejemplo@gmail.com"
                    type="email"
                    name="email"
                    handleChange={handleChange}/>
            </div>
            <div>
                <label>
                    Descripción:
                    <textarea onChange={handleChange} name="description" className="text-black w-full min-h-[180px] rounded-lg p-2" placeholder="Describe el servicio"></textarea>
                </label>
            </div>
            <div className="flex justify-center">
                <Button className="btn-primary px-12 py-3">
                    Crear factura
                </Button>
            </div>
        </form>
    );
}

export default FormInvoices;