import defaultDataInvoice from "../../consts/defaultDataInvoice";
import FormInvoices from "./FormInvoices";
import {useState} from 'react';
import RenderView from "./RenderView";

function GenerateInvoices() {
    const [invoiceData, setiInvoiceData] = useState(defaultDataInvoice as Invoice);
    const getInvoiceData=(invoiceData: Invoice)=>{
        setiInvoiceData(invoiceData);
    }
    return (
        <main className="min-h-[100vh] bg-primary-dark border-b border-gray-700 p-12 pb-24 flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold">Genera una factura - HOOK</h1>
                { !invoiceData.client ?
                    <FormInvoices getInvoiceData={getInvoiceData}/> :
                    <RenderView invoicesData={invoiceData}/>
                }
        </main>
    );
}

export default GenerateInvoices;