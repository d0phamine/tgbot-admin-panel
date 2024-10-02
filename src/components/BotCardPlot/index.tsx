
import { FC } from "react";
import { Tiny } from "@ant-design/plots";

export interface BotCardPlotProps {
    type?: string | null,
}

export const BotCardPlot: FC<BotCardPlotProps> = (props) => {
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

	return <Tiny.Line className="bot-card-plot" {...config} />;
};