import UnderLineSubtitle from "./UnderLineSubtitle";

interface Props{
    subtitle: string, 
    underline: string
};

function SubtitleSection({subtitle, underline}:Props) {
    return (
        <h2 className="text-3xl font-bold text-center">
            {subtitle} <br />
            <span className="text-terciary">{underline}</span>
            <UnderLineSubtitle/>
        </h2>
    );
}

export default SubtitleSection;