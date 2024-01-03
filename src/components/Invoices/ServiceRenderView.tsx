interface Props {
    service: string,
    quantity: string | number,
    price: string | number
}
function ServiceRenderView({service, quantity, price}: Props) {
    return (
        <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #111827', paddingBottom:'18px' }}>
            <h5>Servicio: <span style={{ fontWeight: '500' }}>{service}</span></h5>
            <div style={{ display: 'flex', fontSize: '14px', gap: '20px', textAlign: 'right' }}>
                <div>
                    Cantidad:
                    <p style={{ fontWeight: '500' }}>{quantity}</p>
                </div>
                <div>
                    Precio:
                    <p style={{ fontWeight: '500' }}>${price}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceRenderView;