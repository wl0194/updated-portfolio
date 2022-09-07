import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpeg";


export const Banner = () => {



    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Oh, hello there</span>
                        <h1>{`My name is Amy J Hwang.`}</h1>
                        <p>I'm a graduate from a full stack bootcamp offered through University of Pennsylvania.
                            From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. It has offered an engaging challenge to continually learn and improve any skills in creating high-quality software.<br></br><br></br>
                            I'm a UI focused developer who is not afraid of acquiring new skills and loves tackling new challenges
                            and also I have serious passion for UI effects animations and creating intuitive, dynamic user experiences.
                            What started with a simple "Hello, World" has become a full-fledged passion that only gets more exciting as the years go by.
                            Below you'll find projects I've completed that showcase my skills and general background in developing software.</p>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="" />
                    </Col>
                </Row>
            </Container>

        </section>

    )
}