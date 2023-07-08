
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Fade from 'react-reveal/Fade';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ftzlvd', 'template_idzgkxq', form.current, 'fPx0673r6m1jSl1fi')

        e.target.reset()
    };
    return (
        <section id="contact">
            <Fade bottom>
                <h1>Let's connect</h1>
            </Fade>
            <Fade bottom>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn-block">Send Message</button>
                </form>
            </Fade>

        </section>

    )
}