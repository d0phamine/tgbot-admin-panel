import { FC } from "react";

import {
	RiseOutlined,
	WarningOutlined,
	ExclamationCircleOutlined
} from "@ant-design/icons";
import { BotCardPlot } from "../BotCardPlot";

import { useScreenSize } from "../../hooks";
import "./index.scss";

export interface BotCardProps {
	type?: string | null;
	data: { name: string; eventsAmount: number; usersAmount: number };
	onClick?:() => void
}

export const BotCard: FC<BotCardProps> = (props) => {
	return (
		<div className={"bot-card" + " " + "bot-card-" + props.type} onClick={props.onClick}>
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
					<BotCardPlot type={props.type} />
					<div className="content-events__indicator">
						{props.type == "warning" ? (
							<ExclamationCircleOutlined
								style={{ fontSize: "24px", color: "#1d1c1c" }}
							/>
						) : props.type == "error" ? (
							<WarningOutlined
								style={{ fontSize: "24px", color: "#1d1c1c", paddingBottom: "3px" }}
							/>
						) : (
							<RiseOutlined
								style={{ fontSize: "24px", color: "#1d1c1c" }}
							/>
						)}
					</div>
				</div>
				<div className="content-users">
					<p>{props.data.usersAmount + " " + "users"}</p>
				</div>
			</div>
		</div>
	);
};

