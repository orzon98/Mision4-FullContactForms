import {useState} from "react";
import {GRADOS} from "./RegistroLogBook";



export default function ListaAscensiones({ascensiones}){
    const [grado, setGrado] = useState("");
    const visibles = grado === "" ? ascensiones : ascensiones.filter((a) => (a.grado === grado));

    return (
    <>
        <div className="filtro">
            <select value={grado} onChange={(e)=> setGrado(e.target.value)}>
                <option value=""> Todos los grados</option>
                {GRADOS.map((g)=><option key={g} value={g}>{g}</option>)}
            </select>
        </div>
        
        <div className="lista">
            {visibles.map((a) => (
                <article className="tarjeta" key={a.id}>
                    <header className="tarjeta-cabecera">
                        <h3>{a.via}</h3>
                        <span className="grado">{a.grado}</span>
                    </header>

                    <p className="sector">📍 {a.sector}</p>
                    {a.notas && <p className="notas">“{a.notas}”</p>}

                    <footer className="tarjeta-pie">
                        <span className="tipo">{a.tipoEncadene}</span>
                        <time dateTime={a.fecha}>
                        {new Date(a.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                        </time>
                    </footer>
                </article>
            ))}
        </div>
    </>
    )
}