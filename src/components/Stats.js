import React from 'react';
const Stats = () => {
    return (
        <div >

            <div className="container">
            <div className='titulo'>Estadísticas </div>
                <div className='tarjeta'><img  src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" /></div>
                {/* <div className='tarjeta'><img src="https://github-readme-streak-stats.herokuapp.com/?user=joel5vega&layout=compact&theme=dark&hide=current" alt="joel5vega" /></div> */}
                <div className='tarjeta'><img  src="https://github-readme-stats.vercel.app/api?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark&hide=issues,prs" alt="joel5vega" /></div>
            </div>


        </div>
    )
}
export default Stats;