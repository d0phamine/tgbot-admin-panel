import { FC, useEffect, useState, useRef } from "react";

import { RiseOutlined } from "@ant-design/icons";
import { Tiny } from "@ant-design/plots";

import { useScreenSize } from "../../hooks";
import "./index.scss";

export interface BotCardProps {
	type?: string | null,
    data: {name:string, eventsAmount:number, usersAmount:number},
}

export interface EventLineProps {
    type?: string | null,
}

const EventLine: FC<EventLineProps> = (props) => {
	const data = [
		264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467,
		513, 546, 983, 340, 539, 243, 226, 192,
	].map((value, index) => ({ value, index }));
	const config = {
		data,
		width: 170,
		height: 36,
		padding: 8,
		shapeField: "smooth",
		xField: "index",
		yField: "value",
		colorField:
			props.type === "warning"
				? "#fff2d2"
				: props.type === "error"
					? "#FFD4D8"
					: "#E1FCDE",
	};

	return <Tiny.Line className="content-events__plot" {...config} />;
};

export const BotCard: FC<BotCardProps> = (props) => {
	return (
		<div className={"bot-card" + " " + "bot-card-" + props.type}>
			<div className="bot-card__status">
				<div className="status-indicator"></div>
			</div>
			<div className="bot-card__content">
				<div className="content-title">
					<p>{props.data.name}</p>
				</div>
				<div className="content-events">
					<div className="content-events__numbers">
						<p>{props.data.eventsAmount}</p>
						<p>events</p>
					</div>
					<EventLine type={props.type} />
					<div className="content-events__indicator">
						<RiseOutlined
							style={{ fontSize: "24px", color: "#1d1c1c" }}
						/>
					</div>
				</div>
				<div className="content-users">
					<p>{props.data.usersAmount + " " + "users"}</p>
				</div>
			</div>
		</div>
	);
};

