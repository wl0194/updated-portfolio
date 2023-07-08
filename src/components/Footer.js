/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiFillGithub } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (
        <footer>
            <Fade bottom>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Fade>
            <Fade bottom>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/amy-h-633194216/"><BsLinkedin /></a>
                    <a href="https://github.com/wl0194"><AiFillGithub /></a>
                </div>
            </Fade>

            <Fade bottom>
                <div className="footer__copyright">
                    <small>&copy; Amy Hwang. All rights reserved.</small>
                </div>
            </Fade>

        </footer>
    )
}