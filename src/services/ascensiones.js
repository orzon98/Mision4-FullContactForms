const API_URL = import.meta.env.VITE_API_URL

export async function obtenerAscensiones() {
    const respuesta = await fetch(`${API_URL}/ascensiones`);

    if(!respuesta.ok){
        throw new Error("No se pudieron obtener las ascensiones");
    }

    return respuesta.json();
}

export async function crearAscension(datos){
    const respuesta = await fetch(`${API_URL}/ascensiones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    });

        if(!respuesta.ok){
            throw new Error("No se pudo crear la ascension");
        }

        return respuesta.json();
}