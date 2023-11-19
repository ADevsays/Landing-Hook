
interface Props{
    title:string, 
    content:string, 
    img:string
}

function CardBenefitServices({title, content, img}:Props) {
    return (
        <div className='w-[320px] bg-secondary text-primary rounded-xl flex-center flex-col'>
            <div className='bg-secondary rounded-t-xla border-b-2 border-primary-dark'>
                <img className='w-full object-contain max-h-[200px]' src={img} alt="" />
            </div>
            <div className='mt-3 text-center px-2 pb-4'>
                <h4 className='font-bold text-xl'>
                    {title}
                </h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default CardBenefitServices;