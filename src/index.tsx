import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";

import "./styles/global.scss";

import { Router } from "./router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: {
					// Seed Token
					colorPrimary: "#ECEFF4",
				},
			}}
		>
			<Router />
		</ConfigProvider>
	</React.StrictMode>,
);