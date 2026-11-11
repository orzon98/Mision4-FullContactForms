import RegistroLogBook from "./RegistroLogBook"
import ListaAscensiones from "./ListaAscensiones"


function App() {
  

  return (
    <>
      <main>
        <header className="cabecera">
          <p className="kicker">Cuaderno de vías</p>
          <h1>Logbook</h1>
        </header>

        <RegistroLogBook />
        <ListaAscensiones />
      </main>
    </>
  )
}

export default App
