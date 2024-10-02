import { FC } from "react";
import { Column } from "@ant-design/plots";

import "./index.scss";

export const OverviewPlot = () => {
	const data = [
		{
			name: "TG-bot-001",
			month: "Jan.",
			eventsAmount: 18.9
		},
		{
			name: "TG-bot-001",
			month: "Feb.",
			eventsAmount: 28.8
		},
		{
			name: "TG-bot-001",
			month: "Mar.",
			eventsAmount: 39.3
		},
		{
			name: "TG-bot-001",
			month: "Apr.",
			eventsAmount: 81.4
		},
		{
			name: "TG-bot-001",
			month: "May",
			eventsAmount: 47
		},
		{
			name: "TG-bot-001",
			month: "Jun.",
			eventsAmount: 20.3
		},
		{
			name: "TG-bot-001",
			month: "Jul.",
			eventsAmount: 24
		},
		{
			name: "TG-bot-001",
			month: "Aug.",
			eventsAmount: 35.6
		},
		{
			name: "TG-bot-002",
			month: "Jan.",
			eventsAmount: 12.4
		},
		{
			name: "TG-bot-002",
			month: "Feb.",
			eventsAmount: 23.2
		},
		{
			name: "TG-bot-002",
			month: "Mar.",
			eventsAmount: 34.5
		},
		{
			name: "TG-bot-002",
			month: "Apr.",
			eventsAmount: 99.7
		},
		{
			name: "TG-bot-002",
			month: "May",
			eventsAmount: 52.6
		},
		{
			name: "TG-bot-002",
			month: "Jun.",
			eventsAmount: 35.5
		},
		{
			name: "TG-bot-002",
			month: "Jul.",
			eventsAmount: 37.4
		},
		{
			name: "TG-bot-002",
			month: "Aug.",
			eventsAmount: 42.4
		},
		{
			name: "TG-bot-003",
			month: "Jan.",
			eventsAmount: 12.4
		},
		{
			name: "TG-bot-003",
			month: "Feb.",
			eventsAmount: 23.2
		},
		{
			name: "TG-bot-003",
			month: "Mar.",
			eventsAmount: 34.5
		},
		{
			name: "TG-bot-003",
			month: "Apr.",
			eventsAmount: 99.7
		},
		{
			name: "TG-bot-003",
			month: "May",
			eventsAmount: 52.6
		},
		{
			name: "TG-bot-003",
			month: "Jun.",
			eventsAmount: 35.5
		},
		{
			name: "TG-bot-003",
			month: "Jul.",
			eventsAmount: 37.4
		},
		{
			name: "TG-bot-003",
			month: "Aug.",
			eventsAmount: 42.4
		}
	];
	const config = {
		data: data,
		xField: "month",
		yField: "eventsAmount",
		colorField: "name",
		group: true,
		height: 200,
		theme: "classicDark",
		style: {
			inset: 5
		}
	};
	return <Column {...config} />;
};

