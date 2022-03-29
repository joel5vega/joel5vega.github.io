import React from 'react';
import Rescuetime from "./Rescuetime.js"

const Stats = () => {
    return (
        <section id='stats' className='container stats__container'>
            <Rescuetime />
            <img className='imagen' src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" />

        </section>
    )
}
export default Stats;