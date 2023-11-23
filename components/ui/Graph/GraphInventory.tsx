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

const GraphInventory = () => {

    const energySources = [
        { value: 'NombreMaterial', name: 'NombreMaterial' },
      ];
    
      const countriesInfo = [{
        country: '01-12-2023',
        NombreMaterial: 25
      },
      {
        country: '01-13-2023',
        NombreMaterial: 36
      },
      {
        country: '01-14-2023',
        NombreMaterial: 125
      },
      {
        country: '01-15-2023',
        NombreMaterial: 200
      },
      {
        country: '01-16-2023',
        NombreMaterial: 35
      },
      {
        country: '01-17-2023',
        NombreMaterial: 0
      },
      {
        country: '01-18-2023',
        NombreMaterial: 1
      },
      {
        country: '01-19-2023',
        NombreMaterial: 35
      },
      {
        country: '01-20-2023',
        NombreMaterial: 174
      },
      {
        country: '01-21-2023',
        NombreMaterial: 97
      },
      {
        country: '01-22-2023',
        NombreMaterial: 100
      },];

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

                        <Title text="Evolución de saldos diaría">
                            <Subtitle text="Total de saldos del Material" />
                        </Title>
                        <Tooltip enabled={true} />
                    </Chart>
        </div>
    )
}

export { GraphInventory }