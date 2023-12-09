import { dataInvoice, dataService } from "../../consts/dataInvoice.ts";
import Button from "../Button";
import DataInvoicesInput from "./DataInvoicesInput";
import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import FormOnlyService from "./FormOnlyService.tsx";
import everyValueIsFill from "../../helpers/everyValueIsFill.ts";

function FormInvoices({ getInvoiceData }: { getInvoiceData: (data: Invoice) => void }) {
    const [invocesData, setInvocesData] = useState(dataInvoice as Invoice);
    const [service, setService] = useState(dataService as Service);
    const [quantityOfServices, setQuantityOfServices] = useState<number[]>([0]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const input = e.target;
        if (!(input && (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement))) return;
        const value = input.value;
        const key = input.name;
        const toSendData = { ...invocesData };
        const keyOfObj = key as keyof Invoice;
        if (keyOfObj == 'services') return;
        toSendData[keyOfObj] = value;
        setInvocesData(toSendData);
    };

    const handleChangeService = (index:number) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const input = e.target;
        if (!(input && (input instanceof HTMLInputElement || input instanceof HTMLSelectElement))) return;
        const value = input.value;
        const key = input.name;
        const currentService = invocesData.services[index];
        const currentServiceIsFill = currentService ? everyValueIsFill(currentService) : false;
        const cloneService = currentServiceIsFill ? {...currentService} : { ...service };
        const keyService = key as keyof Service;
        cloneService[keyService] = value;
        if(everyValueIsFill(cloneService)){
            invocesData.services[index] = cloneService;
        }
        setService(cloneService);
    }

    const addService = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(quantityOfServices.length < 3){
            setQuantityOfServices(services => [...services, (services.length - 1) + 1])
        }
        else{
            alert('Solo pueden haber 3 servicios');
        } 
    }

    const deleteService = (index:number) => (e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(quantityOfServices.length > 1){
            setQuantityOfServices((services) => {
                const newServices = [...services];
                newServices.pop();
                return newServices;
            });
            setInvocesData(invoice=> {
                const newInvoice = {...invoice};
                newInvoice.services = newInvoice.services.filter((_, i) => i!=index);
                return newInvoice;
            });
        }else{
            alert('Tiene que haber al menos un servicio');
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
                    className="w-full"
                />
                <DataInvoicesInput
                    label="Fecha del servicio"
                    placeholder="Fecha"
                    type="date"
                    name="date"
                    handleChange={handleChange}
                />
                <DataInvoicesInput
                    label="Método de pago"
                    placeholder="Paypal..."
                    name="payment"
                    handleChange={handleChange}
                />
            </div>
            <div className="flex flex-col">
                {
                    quantityOfServices.map(service => (
                        <FormOnlyService
                            key={service}
                            deleteService={deleteService(service)}
                            handleChangeService={handleChangeService(service)}
                        />))
                }
                <button onClick={addService} className="btn-primary m-0 mt-7 p-0 px-2 border-none rounded-lg text-xl hover:opacity-80">+</button>
            </div>

            <div className="flex gap-6 flex-wrap justify-center items-center">
                <label className="w-full lg:w-[48%]">
                    Quién recibe:
                    <select onChange={handleChange} defaultValue='Hook' name="receives" className="w-full text-black p-2 rounded mt-3">
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
                    handleChange={handleChange} />
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