import NavBar from "@/components/NavBar";
import { CreditCardIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </main>
    </>
  )
}
