import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="flex justify-between bg-slate-800 p-6">
            <ul className="flex gap-12 text-slate-400 text-sm items-end">
                <li>
                    <a href="#">
                        <h1 className="text-slate-200 text-xl font-bold">
                            Gestança
                        </h1>
                    </a>
                </li>
                <li><Link className={active == "despesas" && 'text-slate-100'} href="/despesas">despesas</Link></li>
                <li><Link className={active == "contas" && 'text-slate-100'} href="/">contas</Link></li>
                <li><Link className={active == "categorias" && 'text-slate-100'} href="/categorias">categorias</Link></li>
            </ul>
            <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}