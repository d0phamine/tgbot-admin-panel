import { FC } from "react";
import { RadialBar } from "@ant-design/plots";

import "./index.scss";

const data = [
    { name: 'TG-bot-002', events: 136 },
    { name: 'TG-bot-001', events: 300 },
    { name: 'TG-bot-003', events: 500 },
  ];

export const DonutPlot:FC = () => {
    const config = {
        data,
        theme: "classicDark",
        xField: 'name',
        yField: 'events',
        maxAngle: 300,
        innerWidth: 200,
        radius: 1.5,
        innerRadius: 0.5,
        tooltip: {
          items: ['events'],
        },
        legend: false,
        axis: {
          y: false,
        },
        markBackground: {
          opacity: 0.01,
        },
        scale: {
          y: {
            domain: [0, 800],
          },
        },
        style: {
          radius: 20,
          fill: ({ name }) => {
            if (name == "TG-bot-001"){
              return('#5889ef')
            } else if (name == "TG-bot-002"){
              return('#59cfa1')
            } else {
              return ('#586b8c')
            }
          },
        },
      };
      return <RadialBar {...config} />;
}