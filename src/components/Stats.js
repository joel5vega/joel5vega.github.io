import axios from 'axios';
import React from 'react';
const rescuetimeURL = "https://www.rescuetime.com/anapi/daily_summary_feed?key=B632wU543wwlr1Aw96D0Jie8Xa806KxiKruYi9_4&format=json&interval=day"

const Stats = () => {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.defaults.headers.get['Content-Type'] ='application/json';
        axios.get(rescuetimeURL)
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
    }, [])
    if (!data) return null

    return (
        <div >
            <div className="container">
                {/* <div className='titulo'>Estadísticas </div> */}
                <div className="tarjeta"></div>
                <div className='tarjeta'><img src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" /></div>
                <div className='imagen'><img src="https://github-readme-stats.vercel.app/api?username=joel5vega&show_icons=false&locale=en&layout=compact&theme=dark&hide=issues,prs&hide_rank=true&custom_title=Github stats" alt="joel5vega" /></div>
            </div>


        </div>
    )
}
export default Stats;