'use client'

import Button from "@/components/Button"
import ButtonLink from "@/components/ButtonLink"

 
export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center h-screen">
        <div className="bg-slate-800 p-8 rounded">
            <h2 className="text-2xl font-bold">Oh não! Um erro aconteceu</h2>
            <p>{error.message}</p>
            <div className="flex gap-4 justify-around mt-4">
                <ButtonLink href="/" variante="secundary">voltar para home</ButtonLink>
                <Button onClick={() => reset()}>Tentar novamente</Button>
            </div>
        </div>
    </main>
  )
}