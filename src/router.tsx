import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index path="/" element={<MainPage />} />
			</Routes>
		</HashRouter>
	);
};