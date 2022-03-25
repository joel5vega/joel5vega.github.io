import axios from 'axios';
import React from 'react';
import Rescuetime from "./Rescuetime.js"
// import SisHorarios from './SisHorarios';
const rescuetimeURL = "https://www.rescuetime.com/anapi/daily_summary_feed?key=B632wU543wwlr1Aw96D0Jie8Xa806KxiKruYi9_4&format=json&interval=day"

const Stats = () => {
    /*
        const [data, setData] = React.useState([]);
       
        const CORS_SERVER = 'https://cors-anywhere.herokuapp.com/'
       
       React.useEffect(() => {
            axios({
                method: 'get',
                url: CORS_SERVER + rescuetimeURL,
            }).then(res => {
                setData(res.data);
                console.log(res.data)
            }).catch(err => { console.log("error", err) })
    
        }, [])
        */

    return (
        <div >
            <div className="container">
                
                    <Rescuetime />

                <div className="box">
                    <div className='box'><img src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" /></div>
                </div>

            </div>
        </div>
    )
}
export default Stats;