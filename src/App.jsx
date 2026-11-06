import { useState } from 'react'
import RegistroLogBook from "./RegistroLogBook"
import ListaAscensiones from "./ListaAscensiones"

const ascensionesPrueba = [
  { id: 1, via: "La Cabra", sector: "La Pedriza", grado: "6a", tipoEncadene: "Flash", fecha: "2026-10-18", notas: "" },
  { id: 2, via: "Diedro Sur", sector: "Patones", grado: "5+", tipoEncadene: "A vista", fecha: "2026-10-25", notas: "" },
  { id: 3, via: "Luna Llena", sector: "Albarracín", grado: "6b", tipoEncadene: "Punto rojo", fecha: "2026-09-12", notas: "Tercer intento, el paso del techo es clave" },
  { id: 4, via: "El Rincón", sector: "Patones", grado: "4", tipoEncadene: "A vista", fecha: "2026-08-30", notas: "" },
  { id: 5, via: "Pared Roja", sector: "Chulilla", grado: "6c+", tipoEncadene: "Punto rojo", fecha: "2026-10-04", notas: "Mucha continuidad, bien de dedos" },
  { id: 6, via: "Aguja Norte", sector: "Los Mallos de Riglos", grado: "5", tipoEncadene: "Flash", fecha: "2026-07-19", notas: "" },
  { id: 7, via: "Fisura del Viento", sector: "La Pedriza", grado: "7a", tipoEncadene: "Punto rojo", fecha: "2026-10-31", notas: "Mi primer 7a" },
  { id: 8, via: "Estrella Polar", sector: "Siurana", grado: "6a+", tipoEncadene: "A vista", fecha: "2026-09-27", notas: "" },
  { id: 9, via: "Cuarzo", sector: "Albarracín", grado: "6b+", tipoEncadene: "Flash", fecha: "2026-10-11", notas: "" },
  { id: 10, via: "Sombra Larga", sector: "Margalef", grado: "8a", tipoEncadene: "Punto rojo", fecha: "2026-11-01", notas: "Proyecto de largo recorrido" },
];


function App() {
  const {ascensiones, setAscensiones} = useState([]);

  return (
    <>
      <main>
        <header className="cabecera">
          <p className="kicker">Cuaderno de vías</p>
          <h1>Logbook</h1>
        </header>

        <RegistroLogBook />
        <ListaAscensiones ascensiones={ascensionesPrueba} />
      </main>
    </>
  )
}

export default App
