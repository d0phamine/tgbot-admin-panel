import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BotPanel, BotsOverview } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index path="/" element={<BotsOverview/>} />
				<Route index path="/bot" element={<BotPanel />} />
			</Routes>
		</HashRouter>
	);
};
