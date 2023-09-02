export default function InputText({label, id, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-slate-200">{label}</label>
            <input 
                className="bg-slate-800 rounded p-2 outline-none" 
                type="text" 
                id={id} 
                {...props}
            />
        </div>
    )
}