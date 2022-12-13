import { useForm, ValidationError } from '@formspree/react'


const Newsletter = () => {

    const [state, handleSubmit] = useForm("mqkjrjvy");

    if (state.succeeded) {
        return <p>Checkea tu bandeja de entrada</p>;
    }

    return (
        <div>
            <h3>NEWSLETTER</h3>
            <p>SUSCRIBITE</p>
            <p>Y enterate de todas las novedades</p>
            <form onSubmit={handleSubmit}>
                <input id="email" name="email" placeholder="Ingresa tu email" type="email" />
                <ValidationError errors={state.errors} field="email" prefix="Email" />
                <button type="submit" disabled={state.submitting}>→</button>
            </form>
        </div>
    )
}

export default Newsletter;