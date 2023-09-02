import DropMenu from '@/components/DropMenu'
import { CreditCardIcon } from '@heroicons/react/24/solid'

export default function Conta({ conta }) {
    const { nome, icone, saldo } = conta
    return (
        <div id="data-row" className="flex items-center justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
                <CreditCardIcon className="h-6 w-6" />
                <span>{nome}</span>
            </div>
            <div className='flex items-center'>
                <span>R$ {saldo.toFixed(2)}</span>
                <DropMenu />
            </div>
        </div>
    )
}