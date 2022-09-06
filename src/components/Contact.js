
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mqkjepwj");
    if (state.succeeded) {
        return <section><p id="submit-confirm">Message Sent!</p></section>;
    }
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-label" htmlFor="name">Full Name:</label>
                <input className="input" type="name" name="name" required="required" />
                <ValidationError prefix="Name" field="name" errors={state.errors} /><br />

                <label className="contact-label" htmlFor="email">Email Address:</label>
                <input className="input" type="email" name="email" required="required" />
                <ValidationError prefix="Email" field="email" errors={state.errors} /><br />

                <label className="contact-label" htmlFor="message">Message:</label><br />
                <textarea className="input" name="message" rows="10" cols="100" required="required" /><br />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <div className="form-container">
                    <button className="btn btn-block btn-info" disabled={state.submitting}>Submit</button>
                </div>
            </form>
        </section>
    );
}
export const Contact = () => {
    return (
        <ContactForm />
    );
}

// export const Contact = () => {
//     return (
//         <section id="contact">
//             <h1>Contact</h1>
//             <p>Get In Touch</p>
//             <div className="container contact__bx">


//                 <form action="">
//                     <input type="text" name="name" placeholder="Your Full Name" required />
//                     <input type="email" name="email" placeholder="Your Email Address" required />
//                     <textarea name="message" rows="7" placeholder="Your Message" required />
//                     <button type="submit" className="btn btn-primary">Send Message</button>
//                 </form>

//             </div>
//         </section>

//     )

// }