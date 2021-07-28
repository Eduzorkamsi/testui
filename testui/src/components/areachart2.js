import React from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes2 = () => {
  var data = [
    {
      year: '1991',
      count: 10,
    },
    {
      year: '1992',
      count: 4,
    },
    {
      year: '1993',
      count: 5,
    },
    {
      year: '1994',
      count: 5,
    },
    {
      year: '1995',
      count: 4.9,
    },
    {
      year: '1996',
      count: 35,
    },
    {
      year: '1997',
      count: 7,
    },
    {
      year: '1998',
      count: 1,
    },
    {
      year: '1999',
      count: 20,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'year',
    yField: ['', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: false,
        color: '#5B8FF9',
        lineStyle: {
          lineWidth: 0,
          lineDash: [0, 0],
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
        lineStyle: {
          lineWidth: 4,
          opacity: 0.5,
        },
        label: {},
        point: {
          shape: 'circle',
          size: 4,
          style: {
            opacity: 0.5,
            stroke: '#5AD8A6',
            fill: '#fff',
          },
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes2;