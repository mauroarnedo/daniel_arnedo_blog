import "./contact.css";
const Contact = () => {
    return (
    <div className="contact-container">
            <h2>Contacto</h2>
            <form>
                <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
                </div>
                <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                </div>
                <div>
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;