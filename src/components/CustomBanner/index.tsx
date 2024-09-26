import { FC } from "react";

import "./index.scss";
import {
	CheckCircleFilled,
	CloseCircleFilled,
	InfoCircleFilled,
	WarningFilled,
} from "@ant-design/icons";

export const CustomBanner = (props: any) => {
	return (
		<div className={"custom-banner" + " " + "banner-" + props.type}>
			<div className="custom-banner__icon">
				{props.type == "success" ? (
					<CheckCircleFilled style={{fontSize: "24px", color:"#17BF33"}} />
				) : props.type == "info" ? (
					<InfoCircleFilled />
				) : props.type == "warning" ? (
					<WarningFilled />
				) : (
					<CloseCircleFilled />
				)}
			</div>
			<div className="custom-banner__content"></div>
			<div className="custom-banner__action"></div>
		</div>
	);
};
