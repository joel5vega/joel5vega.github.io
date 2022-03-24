import axios from 'axios';
import React from 'react';
// import SisHorarios from './SisHorarios';
const rescuetimeURL = "https://www.rescuetime.com/anapi/daily_summary_feed?key=B632wU543wwlr1Aw96D0Jie8Xa806KxiKruYi9_4&format=json&interval=day"

const Stats = () => {

    const [data, setData] = React.useState([]);
    const CORS_SERVER = 'http://129.151.116.4:10000';

    React.useEffect(() => {
        axios.get(CORS_SERVER + '/' + rescuetimeURL)
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
    }, [])

    return (
        <div >
            <div className="container">
                <div className="box">
                    {/* <SisHorarios data={data} /> */}
                </div>
                
                <div className="box">
                <div className='titulo-descripcion'>Datos obtenidos de la Api de Rescuetime</div>
                    <table className='tabla'>
                        <thead>
                            <tr><td>Fecha</td><td>Productividad</td></tr>
                        </thead>
                        <tbody>
                            {data.map(item => (<tr key={item.id}><td>{item.date}</td><td>{item.productivity_pulse}</td></tr>))}
                        </tbody>

                    </table>
                </div>
                <div className='box'><img src="https://github-readme-stats.vercel.app/api/top-langs?username=joel5vega&show_icons=true&locale=en&layout=compact&theme=dark" alt="joel5vega" /></div>
                {/* <div className='box'><img src="https://github-readme-stats.vercel.app/api?username=joel5vega&show_icons=false&locale=en&layout=compact&theme=dark&hide=issues,prs,contributed&hide_rank=true&custom_title=Github stats" alt="joel5vega" /></div> */}
            </div>
        </div>
    )
}
export default Stats;