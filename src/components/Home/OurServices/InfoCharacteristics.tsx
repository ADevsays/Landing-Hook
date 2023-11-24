function InfoCharacteristics({info}:{info:string}) {
    return (
        <li className="flex items-center gap-2  w-full py-2">
            <span className="text-emerald-700 text-xl">
                <i className="bi bi-check-lg"></i>
            </span>
            {info}
        </li>
    );
}

export default InfoCharacteristics;