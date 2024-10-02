import { FC } from "react";

import { Select } from "antd";

import "./index.scss";

export interface CustomSelectProps {
	style?:object,
}

const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};

export const CustomSelect: FC<CustomSelectProps> = (props) => {
	return (
		<Select
			style={props.style}
			className="custom-select"
			defaultValue="1 hr"
			onChange={handleChange}
			options={[
				{ value: "1 hr", label: "1 hr" },
				{ value: "30 min", label: "30 min" },
				{ value: "15 min", label: "15 min" },
				{ value: "5 min", label: "5 min" }
			]}
		/>
	);
};
