import { AiFillCheckCircle } from 'react-icons/ai'

export const Skills = () => {


    return (
        <section className="skill" id="skills">
            <h2>Skills</h2>
            <div className="skills-bx">
                <div className="frontend">
                    <h4>Frontend Development</h4>
                    <div className="content">
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>HTML</h5>
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>CSS</h5>
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Javascript</h5>
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Bootstrap</h5>
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Typescript</h5>
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>React</h5>
                            <small>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="backend">
                    <h4>Backend Development</h4>
                    <div className="content">
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Node.JS</h5>
                            <small>Basic</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>MongoDB</h5>
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>MySQL</h5>
                            <small>Basic</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Bootstrap</h5>
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <AiFillCheckCircle />
                            <h5>Node.JS</h5>
                            <small>Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}