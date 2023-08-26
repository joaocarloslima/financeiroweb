'use client'
import { create } from "@/actions/contas";
import ButtonLink from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ContaForm() {
    const [message, setMessage] = useState('')

    async function onCreate(formData) {
        const result = await create(formData)
        if (result.erro) {
            setMessage(result.erro)
            return
        }
        redirect('/contas')
    }

    return (
        <>
            <NavBar active={"contas"} />

            <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200 max-w-md mx-auto">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Cadastrar Conta</h2>
                </div>

                <form action={onCreate} className="max-w-sm">
                    <TextField  name="nome" label="nome" id="nome" placeholder="digite um nome para a conta" />
                    <TextField  name="saldoInicial" label="saldo inicial" type="number" id="saldo" prefix="R$" />
                    <TextField name="icone" label="icone" id="icone" />

                    <div className="flex w-full justify-around">
                        <ButtonLink variante="default" href="/contas" icon={<ArrowLeftIcon />}>cancelar</ButtonLink>
                        <ButtonLink href="/contas/new" icon={<CheckIcon />}>salvar</ButtonLink>
                        <input type="submit" />
                    </div>
                    <span>{message}</span>
                </form>

            </main>
        </>
    )
}
