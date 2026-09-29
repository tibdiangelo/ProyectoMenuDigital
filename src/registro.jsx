import './registro.css'; // O './App.css' dependiendo de cómo nombres tu archivo de estilos
import pizzaImg from './pizza.png'; // Asegúrate de mover la imagen a la carpeta src o ajustar la ruta

function App() {
  return (
    <>
      <header>
        <div className="logopizza">
          <h1>
            <img src={pizzaImg} alt="logo-pizza" />
          </h1>
        </div>
      </header>

      <main>
        <form id="formLogin" onSubmit={(e) => e.preventDefault()}>
          <h1>Registrar Usuario Squisita</h1>
          
          <label htmlFor="usuario">Usuario</label>
          <input 
            type="text" 
            id="usuario" 
            name="usuario" 
            placeholder="Escribe tu usuario" 
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input 
            type="password" 
            id="contrasena" 
            name="contrasena" 
            placeholder="Escribe tu contraseña" 
          />

          <label htmlFor="correo">Correo</label>
          <input 
            type="text" 
            id="correo" 
            name="correo" 
            placeholder="Escribe tu correo" 
          />

          <button type="submit">Registrar</button>
        </form>
      </main>

      <footer>
        <p className="desarrollado">Desarrollado por Grupo Menú Digital</p>
      </footer>
    </>
  );
}

export default App;