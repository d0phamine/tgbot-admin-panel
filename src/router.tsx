import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage, UsersPage } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index path="/" element={<MainPage />} />
				<Route index path="/users" element={<UsersPage />} />
			</Routes>
		</HashRouter>
	);
};
