import { FC, useEffect, useState, useRef } from "react";

import { RiseOutlined } from "@ant-design/icons";
import { Tiny } from "@ant-design/plots";

import { useScreenSize } from "../../hooks";
import "./index.scss";

const EventLine:FC = () => {
	const data = [
		264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467,
		513, 546, 983, 340, 539, 243, 226, 192,
	].map((value, index) => ({ value, index }));
	const config = {
		data,
        width:170,
		height: 36,
		padding: 8,
		shapeField: "smooth",
		xField: "index",
		yField: "value",
		colorField: "#FFF2D2",
	};

	return <Tiny.Line className="content-events__plot" {...config} />;
};

export const BotCard: FC = () => {
	return (
		<div className="bot-card">
			<div className="bot-card__status">
				<div className="status-indicator"></div>
			</div>
			<div className="bot-card__content">
				<div className="content-title">
					<p>Tg-bot-001</p>
				</div>
				<div className="content-events">
					<div className="content-events__numbers">
						<p>136</p>
						<p>events</p>
					</div>
					<EventLine />
					<div className="content-events__indicator">
						<RiseOutlined
							style={{ fontSize: "24px", color: "#1d1c1c" }}
						/>
					</div>
				</div>
				<div className="content-users">
					<p>45 users</p>
				</div>
			</div>
		</div>
	);
};

