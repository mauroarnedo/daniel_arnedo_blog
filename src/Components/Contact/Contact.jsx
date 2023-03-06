import "./contact.css";
const Contact = () => {
    return (
        <div style={{padding: "50px"}}>
            <h2>Contacto</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;