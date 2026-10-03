import './login.css'
import carro from './assets/carrito.jpeg'
import pizza from './assets/pizzaimg.jpg'
import logo from './assets/pizzaloggo.jpeg'
import pizzaa from './assets/pizza.png'
import sodas  from './assets/sodas.webp'
import piizza from './assets/pizzaaaaa.jpg'
import loggo from './assets/logofacebook.jpg'
import insta from './assets/instalogo.webp'

export default function Login() {
    return ( 
        
    <div className="login-container">
            <header>
                <h1><em>Menu</em></h1>
                <img src={logo} alt="logo" className="logo-redondo" />
            </header>
            <main>
                
                <form>
                    <div className="borde-iniciar">
                        <span><em>iniciar sesion</em></span>
                    </div>
                    <input type="text" id="username" placeholder="Ingresa tu usuario" />
                    <input type="password" id="password" placeholder="Ingresa tu contraseña" />
                    <button type="submit">entrar</button>
                </form>
                
            




                <div className="Menu-categorias">
                    <div className="targeta-categoria">
                        <h2><em>pizzas</em></h2>
                        <img src={pizza} alt="imagenpzz" className="pizza-categoria" />
                        <ul>
                            <li>Hawaiana</li>
                            <li>Peperoni</li>
                            <li>Jamon y queso</li>
                            <li>Napolitana</li>
                        </ul>
                    </div>

                    <div className="targeta-categoria">
                        <h2><em>Sodas</em></h2>
                        <img src={sodas} alt="imgsoda" className="soda-categoria" />
                        <ul>
                            <li>Frutos rojos</li>
                            <li>Maracuyá</li>
                            <li>Mango biche</li>
                        </ul>
                    </div>

                    <div className="carrito-icono">
                        <img src={carro} alt="carrito" style={{ width: '50px', height: '50px' }} />
                        <span className="Texto-carrito">Ver pedido</span>
                    </div>
                </div>
            </main>

            <footer className="redes-sociales">
                <p>Redes Sociales</p>
                <div className="logo-redes">
                    <img src={loggo} alt="Facebook" />
                    <img src={insta} alt="Instagram" />
                </div>
            </footer>
       
       </div>
    
    );
}