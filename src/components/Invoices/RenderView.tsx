import LogoHook from '../../Imgs/Logo HOOK.webp';
import { styles } from '../../consts/renderViewStyles';
import {useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Button from '../Button';
import ServiceRenderView from './ServiceRenderView';

interface Props{
    invoicesData: Invoice
}

function RenderView({invoicesData}: Props) {
    const componentRef = useRef(null);
    const [pdfGenerated, setPdfGenerated] = useState(false);
    const [uuidd, setUUID] = useState('');

    useEffect(() => {
        const generateUUIDD=()=>{
            const id = crypto.randomUUID();
            const subId = id.substring(0, 8);
            return subId;
        };
        setUUID(generateUUIDD);
    }, []);

   

    const generatePdf = () => {
        const input = componentRef.current;
        if (input && !pdfGenerated) {
            const html2pdfIntance = new html2pdf(input, {
                filename: `Factura-${uuidd}`, 
            });
            html2pdfIntance.save();
            setPdfGenerated(true);
        }
    };

    const getTotal=()=>{
        const totalValue = invoicesData.services.reduce((acc, item)=>{
            return acc += (Number(item.price) * Number(item.quantity))
        }, 0)
        return totalValue;
    };

    const comeBack=()=>{
        setPdfGenerated(false);
        window.location.reload();
    }

    return (
        <>
            <main style={styles.mainStyle} ref={componentRef}>
                <header style={{ ...styles.headerStyle, flexWrap: 'wrap' }}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <p style={{ fontWeight: "bold" }}>HOOK</p>
                            <img style={{ ...styles.logoContainerStyle, objectFit: 'cover' }} src={LogoHook} alt="logo hook empresa" />
                        </div>
                        <div style={{
                            fontSize: '0.8em',
                            gap: '6px',
                            marginTop: '6px'
                        }}>
                            <p>Tel: +54 2923539559</p>
                            <p>Email: hookoficial@hotmail.com</p>
                        </div>
                    </div>
                    <div style={{ fontSize: '0.8em', }}>
                        <p>Fecha de factura: {invoicesData.date}</p>
                        <p>Número de factura: {uuidd}</p>
                    </div>
                </header>
                <section style={{ padding: '12px' }}>
                    <div style={{
                        marginTop: '6px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <h4 style={{ fontWeight: 'bold', fontSize: '18px' }}>Cliente:</h4>
                        <h4 style={{ fontWeight: 'bold', fontSize: '18px' }}>{invoicesData.client}</h4>
                    </div>
                   {
                    invoicesData.services.map(({service, price, quantity})=> (
                        <ServiceRenderView
                            service={service}
                            price={price}
                            quantity={quantity}
                        />
                    ))
                   }
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                        <p style={{ width: '60%' }}>{invoicesData.description}</p>
                        <h4 style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end', fontSize: '16px' }}>Total: <span style={{ fontWeight: 'bold' }}>${getTotal()}</span></h4>
                    </div>
                </section>
                <footer style={{
                    width: "100%",
                    marginTop: "36px",
                    padding: '12px',
                    fontSize: '14px'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p>Método de pago: {invoicesData.payment}</p>
                            <p>Email de cuenta de pago: {invoicesData.email}</p>
                        </div>
                        <p>Pago a: <span style={{ fontWeight: 'bold' }}>{invoicesData.receives}</span></p>
                    </div>
                    <p>www.hook-oficial.com</p>
                </footer>
            </main>
            <Button onClick={generatePdf} className='btn-primary mt-5 px-12'>Descargar PDF</Button>
            <Button onClick={comeBack} className='btn-secondary mt-5 px-20'>Volver</Button>
        </>
    );
}

export default RenderView;