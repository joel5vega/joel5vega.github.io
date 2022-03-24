import React from "react";
import {Chart} from 'react-charts';
const SisHorarios = (props) => {
    type DailyStars = {
        date: Date,
        stars: number,
      }
      
      type Series = {
        label: string,
        data: DailyStars[]
      }
      // const data = [
      //   {
      //     label: 'Productividad',
      //     data: [
      //       props.data.map(d => ({date:d.date,stars:d.productivity_pulse}))
      //     ]

      //   }
      // ]
       const data  = []
      //   {
      //     label: 'React Charts',
      //     data: [
      //       {
      //         date: "21/03/22",
      //         stars: 2,
      //       }
      //       // ...
      //     ]
      //   },
      //   {
      //     label: 'React Query',
      //     data: [
      //       {
      //         date: "23/03/22",
      //         stars: 3,
      //       }
      //       // ...
      //     ]
      //   }
      // ]
      /*const primaryAxis = React.useMemo(
        (): AxisOptions => ({
          getValue: datum => datum.date,
        }),
        []
      )
    
      const secondaryAxes = React.useMemo(
        (): AxisOptions => [
          {
            getValue: datum => datum.stars,
          },
        ],
        []
      )
    
      return (
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      )*/
}
export default SisHorarios;