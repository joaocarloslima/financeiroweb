import Link from "next/link"

export default function ButtonLink({children = "botao", icon, variante = "primary", ...props}){
    const style = {
        primary: "bg-pink-600 hover:bg-pink-800 ",
        default: "border-slate-600 border-2 hover:bg-slate-800",
    }

    const variantClass = `text-slate-200 py-2 px-4 rounded inline-flex items-center gap-2 ${style[variante]}` 
    return (

        <Link {...props} className={variantClass}>
            {icon &&
                <span className="h-6 w-6">
                    {icon}
                </span>
            }
            <span>{children}</span>
        </Link>
    )
}