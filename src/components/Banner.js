import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpeg";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export const Banner = () => {

    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">

                    <Col xs={12} md={6} xl={7}>
                        <Slide left>
                            <span className="tagline">Oh, hello there</span>
                        </Slide>
                        <Slide bottom>
                            <h1>{`My name is Amy J Hwang.`}</h1>
                        </Slide>
                        <Slide bottom>
                            <p>I'm a graduate from a full stack bootcamp offered through University of Pennsylvania.
                                From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. It has offered an engaging challenge to continually learn and improve any skills in creating high-quality software.<br></br><br></br>
                                I'm a UI focused developer who is not afraid of acquiring new skills and loves tackling new challenges
                                and also I have serious passion for UI effects animations and creating intuitive, dynamic user experiences.
                                What started with a simple "Hello, World" has become a full-fledged passion that only gets more exciting as the years go by.
                                Below you'll find projects I've completed that showcase my skills and general background in developing software.</p>
                        </Slide>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <Fade right>
                            <img src={headerImg} alt="" />
                        </Fade>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}