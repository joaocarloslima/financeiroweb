'use server'

import { revalidatePath } from "next/cache";

export async function create(formData) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)), 
        headers: {
            "Content-Type": "application/json"
        }
    };

    const url = process.env.API_BASE_URL + "/contas"

    const result = await fetch(url, requestOptions);

    if (result.status !== 201) {
        const json = await result.json();
        const errors = json.errors
        const mensagens = errors.reduce( (str, erro) => str += ". " + erro.defaultMessage, "" )
        return { erro: result.status + ". Erro ao criar conta" + mensagens }
    }
    revalidatePath("/contas")
    return { sucesso: "Conta criada com sucesso" }
    
}