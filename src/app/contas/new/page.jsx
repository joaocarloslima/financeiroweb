"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormContas() {
    const [message, setMessage] = useState("")
   
    async function handleSubmit(formData){
        const res = await create(formData)
        if (res.message){
            setMessage(res.message)
            return
        }
        redirect("/contas")
    }

    return (
        <>
            <NavBar />

            <main className="bg-slate-900 p-11 mt-10 rounded-lg text-slate-200 max-w-md m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Conta</h2>

                <form action={handleSubmit}>
                    <InputText label="nome" id="nome" name="nome" />
                    <InputText label="saldo inicial" id="saldoInicial" name="saldoInicial" />
                    <InputText label="icone" id="icone" name="icone" />

                <div className="flex justify-around">
                    <ButtonLink variante="secundary" href="/contas">cancelar</ButtonLink>
                    <Button>salvar</Button>
                </div>
                <p>{message}</p>
                </form>
                
            </main>
        </>
    )
}