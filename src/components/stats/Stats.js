import React from 'react';
import "./stats.css"
import Rescuetime from "./Rescuetime.js"

const Stats = () => {
    return (
        <section id='stats' >
            <div className='container stats__container'>
                <div className='stats__item'>
                    <Rescuetime />
                </div>

                <div className='stats__item'>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" />
                </div>

            </div>
        </section>
    )
}
export default Stats;