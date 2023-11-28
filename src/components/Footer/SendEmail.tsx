function SendEmail() {
    return (
        <>
            <form action="https://formsubmit.co/hookoficial@hotmail.com" method="POST" className="mt-3">
                <label className="h-[40px] flex relative">
                    <input className="h-full w-full rounded-2xl outline-none ps-5 text-primary" type="email" name="email" placeholder="Email" required/>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button type="submit" className="absolute right-0 rounded-none rounded-r-2xl px-6 btn-primary h-full">Enviar</button>
                </label>
            </form>
        </>
    );
}

export default SendEmail;