import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-col justify-between p-3 bg-slate-700 rounded-full h-96 items-center">
            <Link className="font-bold text-white align-middle" href={"/"}>Home</Link>           
            <input className="my-2" type="text" />
            <input className="mb-2" type="text"/>
            <Link className="black_btn" href={"/sign_up"}>Sign Up</Link>
            <Link href={"/sign_in"}>Sign In</Link>
        </div>
    )
}