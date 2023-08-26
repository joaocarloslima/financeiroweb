import Link from "next/link";

export default function NotFound(){
    return (
        <div>
            <h1>404 - Ops, página não encontrada</h1>
            <Link href='/'>voltar para a home</Link>
        </div>
    )
}