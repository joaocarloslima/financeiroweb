import ButtonLink from "@/components/Button";
import NavBar from "@/components/NavBar";
import { CreditCardIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Contas</h2>
          <ButtonLink href="/contas/new" icon={<CreditCardIcon />}>criar conta</ButtonLink>
        </div>
        
        <div id="data">
          <div id="data-row" className="flex justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
              <CreditCardIcon className="h-6 w-6" />
              <span>itau</span>
            </div>
            <span>R$ 100.00</span>
          </div>

        </div>

      </main>
    </>
  )
}
