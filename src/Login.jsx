import './login.css';

function Login() {
    return (
        <>
            <header>
                <h1><em>Menu</em></h1>
                <img src="pizzaloggo.jpeg" alt="logo" className="logo-redondo" />

                <form>
                    <div className="borde-iniciar">
                        <span><em>Iniciar sesion</em></span>
                    </div>
                    <input type="text" id="username" placeholder="Ingresa tu usuario" />
                    <input type="password" id="password" placeholder="Ingresa tu contraseña" />
                    <button type="submit">entrar</button>
                </form>
            </header>

            <main>
                <div className="Menu-categorias">
                    <div className="targeta-categoria">
                        <h2><em>pizzas</em></h2>
                        <img src="pizzaimg.jpg" alt="imagenpzz" className="pizza-categoria" />
                        <ul>
                            <li>Hawaiana</li>
                            <li>Peperoni</li>
                            <li>Jamon y queso</li>
                            <li>Napolitana</li>
                        </ul>
                    </div>

                    <div className="targeta-categoria">
                        <h2><em>Sodas</em></h2>
                        <img src="sodas.webp" alt="imgsoda" className="soda-categoria" />
                        <ul>
                            <li>Frutos rojos</li>
                            <li>Maracuyá</li>
                            <li>Mango biche</li>
                        </ul>
                    </div>

                    <div className="carrito-icono">
                        <img src="carrito.jpeg" alt="carrito" style={{ width: '50px', height: '50px' }} />
                        <span className="Texto-carrito">Ver pedido</span>
                    </div>
                </div>
            </main>

            <footer>
                <h3>Redes Sociales</h3>
                <h4>Facebook | instagram</h4>
            </footer>
        </>
    );
}

export default Login;