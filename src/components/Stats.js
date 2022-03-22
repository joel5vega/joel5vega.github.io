import React from 'react';
const Stats = () => {
    return (
        <div >

            <div className="container">
            {/* <div className='titulo'>Estadísticas </div> */}
                <div className='tarjeta'><img  src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" /></div>
                <div className='imagen'><img  src="https://github-readme-stats.vercel.app/api?username=joel5vega&show_icons=false&locale=en&layout=compact&theme=dark&hide=issues,prs&hide_rank=true&custom_title=Github stats" alt="joel5vega" /></div>
            </div>


        </div>
    )
}
export default Stats;