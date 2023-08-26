'use server'

import { revalidatePath } from "next/cache";

const url = process.env.API_BASE_URL + "/contas"

export async function create(formData) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)), 
        headers: {
            "Content-Type": "application/json"
        }
    };

    try{
        const result = await fetch(url, requestOptions);
    
        if (result.status !== 201) {
            const json = await result.json();
            const errors = json.errors
            const mensagens = errors.reduce( (str, erro) => str += ". " + erro.defaultMessage, "" )
            return { erro: result.status + ". Erro ao criar conta" + mensagens }
        }
        revalidatePath("/contas")
        return { sucesso: "Conta criada com sucesso" }
    }catch(error){
        return { erro: error.message }
    }
    
}

export async function getContas() {
    console.info("get contas from " + url)
    try{
        const result = await fetch(url)
        return result.json()
    }
    catch(error){
        return { erro: error.message }
    }
  }