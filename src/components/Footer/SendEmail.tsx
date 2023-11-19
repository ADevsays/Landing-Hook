import Button from "../Button";

function SendEmail() {
    return (
        <form className="mt-3">
            <label className="h-[40px] flex relative">
                <input className="h-full w-full rounded-2xl outline-none ps-5 text-primary" type="email" placeholder="Email"/>
                <Button className="absolute right-0 rounded-none rounded-r-2xl px-6">Enviar</Button>
            </label>
        </form>
    );
}

export default SendEmail;