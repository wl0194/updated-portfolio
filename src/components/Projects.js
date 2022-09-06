/* eslint-disable jsx-a11y/anchor-is-valid */

import card from "../assets/img/card.png";
import cyclist from "../assets/img/cyclist.png";
import sourceUnknown from "../assets/img/sourceUnknown.png"
import typing_warrior from "../assets/img/typing_warrior.png"


export const Projects = () => {
    return (
        <section id="portfolio">
            <h1>Projects</h1>
            <p>Take a peak at my featured work!</p>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <h3>Card Graphix</h3>
                    <div className="portfolio__item-image">
                        <img src={card} alt="" />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/wl0194/card-graphix" className="btn" target="blank">Github</a>
                        <a href="https://card-graphix.herokuapp.com/" className="btn" target="blank">Live Demo</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <h3>Cyclist</h3>
                    <div className="portfolio__item-image">
                        <img src={cyclist} alt="" />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/wl0194/Cyclist" className="btn" target="blank">Github</a>
                        <a href="https://wl0194.github.io/Cyclist/" className="btn" target="blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <h3>Typing Warrior</h3>
                    <div className="portfolio__item-image">
                        <img src={typing_warrior} alt="" />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/wl0194/Typing-Warrior" className="btn" target="blank">Github</a>
                        <a href="https://afternoon-reaches-65972.herokuapp.com/" className="btn" target="blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <h3>Source Unknown Email Template</h3>
                    <div className="portfolio__item-image">
                        <img src={sourceUnknown} alt="" />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/wl0194/Email-Template" className="btn" target="blank">Github</a>
                        <a href="#" className="btn" target="blank">Live Demo</a>
                    </div>

                </article>

            </div>


        </section>
    )
}

// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import budget from "../assets/img/budget.png";
// import card from "../assets/img/card.png";
// import cyclist from "../assets/img/cyclist.png";
// import note_taker from "../assets/img/note_taker.png";
// import sourceUnknown from "../assets/img/sourceUnknown.png"
// import typing_warrior from "../assets/img/typing_warrior.png"
// import workout_tracker from "../assets/img/workout_tracker.png"


// export const Projects = () => {

//     const projects = [
//         {
//             title: "Budget Tracker",
//             description: "Design & Development",
//             imgUrl: budget,
//         },
//         {
//             title: "Card Graphix",
//             description: "Design & Development",
//             imgUrl: card,
//         },
//         {
//             title: "Cyclist",
//             description: "Design & Development",
//             imgUrl: cyclist,
//         },
//         {
//             title: "Note Taker",
//             description: "Design & Development",
//             imgUrl: note_taker,
//         },
//         {
//             title: "Source Unknown Email Template",
//             description: "Design & Development",
//             imgUrl: sourceUnknown,
//         },
//         {
//             title: "Typing Warrior",
//             description: "Design & Development",
//             imgUrl: typing_warrior,
//         },
//         {
//             title: "Workout Tracker",
//             description: "Design & Development",
//             imgUrl: workout_tracker,
//         },
//     ];

//     return (
//         <section className="project" id="project">
//             <Container>
//                 <Row>
//                     <Col size={6}>
//                         <h2>Projects</h2>
//                         <p>Take a peak at my featured work!</p>
//                         <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                             <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="first">Applications</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="second">Email Templates</Nav.Link>
//                                 </Nav.Item>

//                             </Nav>
//                             <Tab.Content id="slideInUp" >
//                                 <Tab.Pane eventKey="first">
//                                     <Row>
//                                         {
//                                             projects.map((project, index) => {
//                                                 return (
//                                                     <ProjectCard
//                                                         key={index}
//                                                         {...project}
//                                                     />
//                                                 )
//                                             })
//                                         }
//                                     </Row>
//                                 </Tab.Pane>

//                             </Tab.Content>
//                         </Tab.Container>

//                     </Col>
//                 </Row>
//             </Container>

//         </section>
//     )
// }