
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

import {
    AiFillGithub,
} from "react-icons/ai";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            < Container >

                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#intro" className={activeLink === 'intro' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('intro')}>About</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>


                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/amy-hwang-633194216/"><FaLinkedinIn /></a>
                            <a href="https://github.com/wl0194"><AiFillGithub /></a>
                            <a href="https://drive.google.com/file/d/1qQlW8lzH_YQP2SnkjcPRBp_5vCFVWwLi/view?usp=sharing"><AiOutlineDownload /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </ Container>
        </Navbar >
    );
}


