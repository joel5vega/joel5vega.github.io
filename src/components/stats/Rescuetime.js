import React from "react";
import axios from "axios";
// Recharts
import { Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from "recharts";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
//Datos de rescuetime
///static
import diario from "./DataWeek";
import categoria from "./DataSumMonth";
///
const Key = "B632wU543wwlr1Aw96D0Jie8Xa806KxiKruYi9_4";
const rescuetimeURL = "https://www.rescuetime.com/anapi/";
const dailyURL = rescuetimeURL + "daily_summary_feed?key=" + Key + "&format=json&restrict_source_type=computers";
///statico

// get https://www.rescuetime.com/anapi/data?key={{rescuetime_api}}&resolution_time=day&perspective=rank&restrict_kind=overview&restrict_source_type=computers&interval=week&format=json
const categoryURL = rescuetimeURL + "data?key=" + Key + "&resolution_time=day&perspective=rank&restrict_kind=overview&restrict_source_type=computers&interval=week&format=json";

const Rescuetime = () => {
    const [daily, setDaily] = React.useState([]);
    const [category, setCategory] = React.useState([]);

    // const CORS_SERVER = 'https://onmxsgizrl.execute-api.us-east-1.amazonaws.com/default/cors-anywhere'

    const CORS_SERVER = 'http://localhost:8080/'

    React.useEffect(() => {
        axios({
            method: 'get',
            url: CORS_SERVER + dailyURL,
        }).then(res => {
            setDaily(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log("error", err)
            console.log("usando datos daily del recuerdo")
            setDaily(ordenar(diario))
        })
        axios({
            method: 'get',
            url: CORS_SERVER + categoryURL,
        }).then(res => {
            setCategory(res.data.rows);
            console.log(res.data.rows)
        }).catch(err => {
            console.log("error", err);
            console.log("usando datos del recuerdo overview")
            setCategory(categoria)
        })
    }, [])


    function convertirFecha(fechaString) {
        var fechaSp = fechaString.split("-");
        var anio = fechaSp[2];
        var mes = fechaSp[1] - 1;
        var dia = fechaSp[0];
        return new Date(anio, mes, dia);
    }
    var categoryData = []
    //ordenar los dias de la semana
    function ordenar(diario) {
        var orden = diario.sort((a, b) => (convertirFecha(a.date).mes - convertirFecha(b.date)) ? 1 : -1)
        // var reverse=orden.reverse()
        console.log("orden:", orden)
        // setDaily(orden)
        return orden;
    }


    // console.log("dayli00",daily)
    // var dailyO=daily.sort((a, b) => (convertirFecha(a.date) - convertirFecha(b.date)) ? 1
    ///
    category.map(function (row) {
        var dato = {};
        dato.horas = row[1] / 3600;
        dato.categoria = row[3];
        dato.rank = row[0];
        if (dato.horas > 7) {
            categoryData.push(dato)
        }
        return categoryData
    }
    )
    // console.log("datos limpios", categoryData)


    function CustomTooltip({ active, payload, label }) {
        if (active) {
            var horas = daily.find(el => el.date === label).all_productive_duration_formatted;
            var productividad = daily.find(el => el.date === label).productivity_pulse;
            return (
                <div className="custom-tooltip">
                    <p className="descripcion">{`${label}`}</p>
                    <p className="label">{`Work hours: ${horas} `}</p>
                    <p className="label">{` Performance: ${productividad}%`}</p>
                </div>
            );
        }

        return null;
    }
    // Obtener la fecha
    const getDateDay = (date, locale) => {
        if (!locale) locale = 'en-US';
        // var date = new Date(date);
        var dia = date.toLocaleString(locale, { weekday: 'short' });
        // console.log(dia)
        // var day = date.getDate();
        // var month = date.getMonth() + 1;
        return `${dia}`;
    }
    const porcentaje = (valor) => {
        return `${valor}%`
    }
    const hrs = (valor) => {
        return `${valor}h`
    }

    return (
        <div className="stats__container">

            <div><h2>Week Productivity  </h2>
                <img src="https://upgradedreviews.s3.amazonaws.com/images/coupons/logos/rescuetime.png" alt="rescuetime" />
            </div>
            <h5>Total productive hours & Performance</h5>
            <ResponsiveContainer minWidth={250} minHeight={200} maxWidth={"60%"}>
                <ComposedChart width={500}
                    height={400}
                    data={daily}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}>
                    <Line yAxisId="right" type="monotone" dataKey="total_hours" stroke="#a5cfea" />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="productivity_pulse" fill="#306fb8" stroke="#306fb8" />
                    <XAxis dataKey="date" angle={270} tickFormatter={getDateDay} stroke="#ffffff" />
                    <YAxis datakey="productivity_pulse" name="productividad" type="number" domain={[0, 100]} stroke="#306fb8" scale={"auto"} tickFormatter={porcentaje} />
                    <YAxis yAxisId="right" orientation="right" datakey="total_hours" name="horas" type="number" domain={[0, 24]} stroke="#a5cfea" scale={"auto"} tickFormatter={hrs} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend overlinePosition={-1} />
                </ComposedChart>
            </ResponsiveContainer>
            <h2>Principal categories </h2>
            <h5>Hours/month</h5>
            {categoryData.length > 1 &&
                <ResponsiveContainer minWidth={250} minHeight={200} maxWidth={"60%"}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categoryData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="categoria" stroke="#ffffff" />
                        <PolarRadiusAxis stroke="#ffffff" />
                        <Radar name="Mike" dataKey="horas" stroke="#8884d8" fill="#306fb8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            }

        </div>
    );
}
export default Rescuetime;