import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Export,
    Legend,
    Margin,
    Title,
    Subtitle,
    Tooltip,
    Grid,
  } from 'devextreme-react/chart';
import React from 'react';

  const energySources = [
    { value: 'Alquiler', name: 'Alquiler' },
    { value: 'Propio', name: 'Propio' },
    { value: 'Proyecto', name: 'Proyecto' },
    { value: 'CoProducción', name: 'CoProducción' },
    { value: 'Apoyo', name: 'Apoyo' },
    { value: 'Canje', name: 'Canje' },
  ];

  const countriesInfo = [{
    country: 'Enero',
    Alquiler: 7,
    Propio: 6,
    Proyecto: 0,
    CoProducción: 2,
    Apoyo:  1,
    Canje: 8
  }, {
    country: 'Febrero',
    Alquiler: 7,
    Propio: 2,
    Proyecto: 3,
    CoProducción: 9,
    Apoyo:  1,
    Canje: 1
  }, {
    country: 'Marzo',
    Alquiler: 4,
    Propio: 14,
    Proyecto: 4,
    CoProducción: 10,
    Apoyo:  2,
    Canje: 1
  }, {
    country: 'Abril',
    Alquiler: 17,
    Propio: 6,
    Proyecto: 6,
    CoProducción: 12,
    Apoyo:  5,
    Canje: 1
  }, {
    country: 'Mayo',
    Alquiler: 1,
    Propio: 8,
    Proyecto: 2,
    CoProducción: 2,
    Apoyo:  3,
    Canje: 4
  }, {
    country: 'Junio',
    Alquiler: 5,
    Propio: 11,
    Proyecto: 9,
    CoProducción: 8,
    Apoyo:  17,
    Canje: 5
  },
  {
    country: 'Julio',
    Alquiler: 16,
    Propio: 10,
    Proyecto: 16,
    CoProducción: 7,
    Apoyo:  15,
    Canje: 0
  },
  {
    country: 'Agosto',
    Alquiler: 12,
    Propio: 3,
    Proyecto: 6,
    CoProducción: 4,
    Apoyo:  2,
    Canje: 0
  },
  {
    country: 'Septiembre',
    Alquiler: 14,
    Propio: 3,
    Proyecto: 7,
    CoProducción: 0,
    Apoyo:  4,
    Canje: 1
  },
  {
    country: 'Octubre',
    Alquiler: 21,
    Propio: 1,
    Proyecto: 4,
    CoProducción: 0,
    Apoyo:  2,
    Canje: 0
  },
  {
    country: 'Noviembre',
    Alquiler: 0,
    Propio: 1,
    Proyecto: 14,
    CoProducción: 12,
    Apoyo:  15,
    Canje: 2
  },
  {
    country: 'Diciembre',
    Alquiler: 4,
    Propio: 4,
    Proyecto: 3,
    CoProducción: 5,
    Apoyo:  17,
    Canje: 1
  }];

const graphInventory = () => {
    return (
        <div>
            <Chart
                        palette="Violet"
                        dataSource={countriesInfo}
                    >
                        <CommonSeriesSettings
                            argumentField="country"
                            type='line'
                        />
                        {
                            energySources.map((item) => <Series
                                key={item.value}
                                valueField={item.value}
                                name={item.name} />)
                        }
                        <Margin bottom={20} />
                        <ArgumentAxis
                            valueMarginsEnabled={false}
                            discreteAxisDivisionMode="crossLabels"
                        >
                            <Grid visible={true} />
                        </ArgumentAxis>
                        <Legend
                            verticalAlignment="bottom"
                            horizontalAlignment="center"
                            itemTextPosition="bottom"
                        />
                        <Export enabled={true} />
                        <Title text="Eventos por modalidad contractual">
                            <Subtitle text="Total eventos de cada modalidad por mes" />
                        </Title>
                        <Tooltip enabled={true} />
                    </Chart>
        </div>
    )
}

export { graphInventory }