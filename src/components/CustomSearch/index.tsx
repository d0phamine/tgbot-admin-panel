import { FC } from "react";

import { ConfigProvider, Input, theme } from "antd";

import "./index.scss";

export const CustomSearch: FC = () => {
	return (
		<Input
			className="custom-search"
			placeholder="Search"
		/>
	);
};

