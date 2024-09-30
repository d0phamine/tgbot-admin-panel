import { FC } from "react";

import "./index.scss";
import {
	CheckCircleFilled,
	CloseCircleFilled,
	InfoCircleFilled,
	WarningFilled,
} from "@ant-design/icons";



export const CustomBanner = (props:any) => {
	return (
		<div className={"custom-banner" + " " + "banner-" + props.type}>
			<div className="custom-banner__icon">
				{props.type == "success" ? (
					<CheckCircleFilled style={{fontSize: "24px", color:"#17BF33"}} />
				) : props.type == "info" ? (
					<InfoCircleFilled style={{fontSize: "24px", color:"#5598F6"}}/>
				) : props.type == "warning" ? (
					<WarningFilled style={{fontSize: "24px", color:"#F2930D"}}/>
				) : (
					<CloseCircleFilled style={{fontSize: "24px", color:"#F14A58"}}/>
				)}
			</div>
			<div className="custom-banner__content">
                <div className="content-title">
                    <p>{props.title}</p>
                </div>
                <div className="content-description">
                    <p>{props.description}</p>
                </div>
            </div>
			<div className="custom-banner__action"></div>
		</div>
	);
};
