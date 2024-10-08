import { FC } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./index.scss";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface CustomSearchProps {
	size?:SizeType
}

export const CustomSearch: FC<CustomSearchProps> = (props) => {
	return (
		<Input
			className="custom-search"
			placeholder="Search"
			suffix={<SearchOutlined />}
			size={props.size}
		/>
	);
};

