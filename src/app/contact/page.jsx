import Image from "next/image"

const ContactPage = () => {
    return (
        <div className="flex gap-[100px] items-center justify-center">
            <div className="relative flex-1 h-[500px]">
                <Image src={"/contact.png"} alt="" fill/>
            </div>

            <div className="flex-1">
                <form className="flex flex-col gap-6">
                    <input
                    placeholder="Name and Surname"
                    className=" bg-slate-700 rounded px-4 py-2 w-[70%] text-sm"/>
                    <input
                    placeholder="Email Address"
                    className=" bg-slate-700 rounded px-4 py-2 w-[70%] text-sm"/>
                    <input
                    placeholder="Phone Number(Optional)"
                    className=" bg-slate-700 rounded px-4 py-2 w-[70%] text-sm"/>
                    <textarea
                    className="bg-slate-700 w-[70%] h-[100px] rounded px-4 py-2 text-sm"
                    placeholder="Message">
                    </textarea>
                    <button 
                    type="submit"
                    className=" bg-blue-500 w-[70%] h-[40px] rounded text-sm">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage