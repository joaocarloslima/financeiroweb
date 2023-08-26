export default function TextField({label, id, type="text", prefix, ...props}){
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
            <label htmlFor={id}>{label}</label>
            <div className="bg-slate-800 p-2 rounded flex gap-2 items-center">
                <span>{prefix}</span>
                <input type={type} id={id} {...props} className="bg-slate-800 focus:outline-none w-full" />
            </div>
        </div>
    )
}