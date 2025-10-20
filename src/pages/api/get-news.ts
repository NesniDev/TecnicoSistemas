

import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    
    const API_KEY = 'i2Vrvbmpz55P6g0HEyJ0b7n0BW8mEEJ0VmQeCUgK'
    const fechaActual = new Date()
    const copiaFechaActual = new Date(fechaActual)
    copiaFechaActual.setDate(fechaActual.getDate() - 3)
    const fechaMenos5 = copiaFechaActual.toISOString().split('T')[0]

    const res = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${API_KEY}&published_after=${fechaMenos5}&language=es&limit=3&categories=tech&search=computer`)
    if(!res.ok){
       return new Response(JSON.stringify({ error: 'Error al consultar la API' }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json()

    return new Response(JSON.stringify(data),{
        headers: {
            'Content-Type': 'application/json'
        }
    })

    
}        