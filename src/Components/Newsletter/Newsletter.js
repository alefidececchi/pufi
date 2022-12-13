import { useForm, ValidationError } from '@formspree/react'


const Newsletter = () => {

    const [state, handleSubmit] = useForm("mqkjrjvy");

    if (state.succeeded) {
        return <p>Checkea tu bandeja de entrada</p>;
    }

    return (
        <div className='newsletter_container'>
            <h3 className='newsletter_h3'>NEWSLETTER</h3>
            <p className='newsletter_first_p'>SUSCRIBITE</p>
            <p className='newsletter_second_p'>Y enterate de todas las novedades</p>
            <form onSubmit={handleSubmit} className='fl-rw-ctr'>
                <input className='newsletter_input' id="email" name="email" placeholder="Ingresa tu email" type="email" />
                <ValidationError errors={state.errors} field="email" prefix="Email" />
                <button className='newsletter_button' type="submit" disabled={state.submitting}>→</button>
            </form>
        </div>
    )
}

export default Newsletter;