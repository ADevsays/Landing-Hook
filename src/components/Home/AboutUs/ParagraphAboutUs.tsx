interface Props{
    contentOne: string, 
    contentTwo: string,
    title: string
}
function ParagraphAboutUs({contentOne, contentTwo, title}:Props) {
    const [text, underline] = title.split(' ')
    return (
        <>
            <h3 className="text-left full font-bold text-2xl ms-4">{text} <span className="text-terciary">{underline}</span>?</h3>
            <p className="m-4 full">
                {contentOne}
            </p>
            <p className="m-4 full border-b-4 border-primary-dark pb-3">
                {contentTwo}
            </p>
        </>
    );
}

export default ParagraphAboutUs;