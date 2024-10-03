import { FC, ReactNode } from "react";

import "./index.scss";
import { CustomTag } from "../CustomTag";

export interface ElevatorProps {
	title: string;
    style?: object,
	content?: string | ReactNode;
	children?: ReactNode;
	onClick?: () => void;
}

export const Elevator: FC<ElevatorProps> = (props) => {
	return (
		<div
			className="elevator"
			onClick={props.onClick}
			style={props.style}
		>
			<div className="elevator__content">
				<p>{props.content}</p>
			</div>
			<div className="elevator__title">
				<p>{props.title}</p>
			</div>
			<div className="elevator__controls">{props.children}</div>
		</div>
	);
};
