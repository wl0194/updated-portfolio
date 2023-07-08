/* eslint-disable jsx-a11y/anchor-is-valid */

import card from "../assets/img/card.png";
import cyclist from "../assets/img/cyclist.png";
import sourceUnknown from "../assets/img/sourceUnknown.png"
import typing_warrior from "../assets/img/typing_warrior.png"
import Slide from 'react-reveal/Slide';
import starbucks from "../assets/img/starbucks.png";
import Tora from "../assets/img/Tora.png";
import playlist from "../assets/img/playlist.png";

export const Projects = () => {
    return (
        <section id="projects">
            <Slide bottom>
                <h1>Things I've built</h1>
            </Slide>
            <div className="container portfolio__container">
                <Slide bottom>
                    <article className="portfolio__item">
                        <h3>Card Graphix</h3>
                        <div className="portfolio__item-image">
                            <img src={card} alt="" />
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/wl0194/card-graphix" className="btn" target="blank">Github</a>
                            <a href="https://card-graphix.web.app/" className="btn" target="blank">Live Demo</a>
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
                        <h3>Starbucks Landing Page</h3>
                        <div className="portfolio__item-image">
                            <img src={starbucks} alt="" />
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/wl0194/startbucks-landing-page" className="btn" target="blank">Github</a>
                            <a href="https://wl0194.github.io/startbucks-landing-page/" className="btn" target="blank">Live Demo</a>
                        </div>

                    </article>

                    <article className="portfolio__item">
                        <h3>Source Unknown Email Template</h3>
                        <div className="portfolio__item-image">
                            <img src={sourceUnknown} alt="" />
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/wl0194/Email-Template" className="btn" target="blank">Github</a>
                            <a href=" https://wl0194.github.io/Email-Template/" className="btn" target="blank">Live Demo</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <h3>Tora Icrecream Email Template</h3>
                        <div className="portfolio__item-image">
                            <img src={Tora} alt="" />
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/wl0194/Icecream" className="btn" target="blank">Github</a>
                            <a href="https://wl0194.github.io/Icecream/" className="btn" target="blank">Live Demo</a>
                        </div>
                    </article>

                    <article className="portfolio__item">
                        <h3>Spotify Playlist</h3>
                        <div className="portfolio__item-image">
                            <img src={playlist} alt="" />
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/wl0194/amy-spotify" className="btn" target="blank">Github</a>
                            <a href="https://amyspotify.netlify.app" className="btn" target="blank">Live Demo</a>
                        </div>
                    </article>

                </Slide>
            </div>


        </section>
    )
}

