'use server'

import { revalidatePath } from "next/cache"
const url =  process.env.NEXT_PUBLIC_BASE_URL + "/contas"

export async function create(formData) {
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao criar a conta. Verifique os campos."}
    }
    revalidatePath("/contas")
    return {ok: "Conta criada com sucesso"}

}

export async function getContas(){
  console.log(url)
  const result = await fetch(url)
  const json = await result.json()
  if(!result.ok){
    const message = json.message
    throw new Error(`Falha ao obter dados das contas. (${result.status} - ${message})` )
  }

  return json
}
   
