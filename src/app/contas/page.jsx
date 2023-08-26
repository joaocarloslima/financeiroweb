import NavBar from "@/components/NavBar";
import Conta from "./Conta";
import ButtonLink from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/solid";

async function getContas() {
  const url = "http://localhost:8080/api/contas"
  const result = await fetch(url)

  return result.json()
}

export default async function Contas() {
  const data = await getContas()
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
        <h2 className="text-2xl font-bold">Contas</h2>
        <ButtonLink href="/contas/new" icon={<CreditCardIcon />}>criar conta</ButtonLink>
      
        <div id="data">
          {data.map((conta) => {
            return <Conta conta={conta} />
          })}

        </div>

      </main>
    </>
  )
}
