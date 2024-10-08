import { FC } from "react";

import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

import { FloatingPanel } from "antd-mobile";
import { StarTwoTone } from "@ant-design/icons";

import { MainLayout } from "../../Layouts";
import {
	BotCard,
	CustomSelect,
	DonutPlot,
	Logo,
	OverviewPlot,
	CustomBanner
} from "../../components";

import { useScreenSize } from "../../hooks";
import { useStores } from "../../store";

import "./index.scss";
import { divide } from "@ant-design/plots/es/core/utils";

export const BotsOverview: FC = observer(() => {
	const anchors = [24, 72 + 119, window.innerHeight * 0.8];
	const redirect = useNavigate();
	const screenSize = useScreenSize();
	const data = [
		{
			name: "TG-bot-001",
			eventsAmount: 300,
			usersAmount: 36
		},
		{
			name: "TG-bot-002",
			eventsAmount: 500,
			usersAmount: 56
		},
		{
			name: "TG-bot-003",
			eventsAmount: 136,
			usersAmount: 43
		}
	];

	return (
		<MainLayout>
			<div className="bots-overview">
				<div className="bots-overview__header">
					<Logo />
					<h1>Active Bots</h1>
					<CustomSelect style={{ width: "100px" }} />
				</div>
				<div className="bots-overview__container">
					<div className="container-block">
						<div className="container-block__bot-cards">
							{data.map(
								(
									item: {
										name: string;
										eventsAmount: number;
										usersAmount: number;
									},
									index
								) => (
									<BotCard
										key={index}
										type={
											item.eventsAmount >= 300 &&
											item.eventsAmount < 500
												? "warning"
												: item.eventsAmount >= 500
													? "error"
													: "normal"
										}
										data={item}
										onClick={() => redirect("/bot")}
									/>
								)
							)}
						</div>
					</div>
					<div className="container-stats">
						<div className="container-stats__overview">
							<OverviewPlot />
						</div>
						<div className="container-stats__widgets">
							<DonutPlot />
							<DonutPlot />
						</div>
						{/* <div className="container-stats__donut"></div> */}
					</div>
				</div>
			</div>
			{screenSize.width < 460 ? (
				<FloatingPanel anchors={anchors}>
					<div className="floating-panel-container">
						<div className="floating-panel-container__balance">
							<div className="balance-username">
								<p>@username</p>
								<p>balance:</p>
							</div>
							<div className="balance-cache">
								<p>343</p>
								<StarTwoTone
									style={{ fontSize: "48px" }}
									twoToneColor="rgba(225, 252, 222, 0.7)"
								/>
							</div>
						</div>
						<div className="floating-panel-container__history">
							<p>History</p>
							<div className="history-list">
								<CustomBanner
									type="success"
									title="Payment"
									description="22.06.2024 18:00"
								/>
								<CustomBanner
									type="success"
									title="Payment"
									description="22.06.2024 18:00"
								/>
								<CustomBanner
									type="success"
									title="Payment"
									description="22.06.2024 18:00"
								/>
								<CustomBanner
									type="success"
									title="Payment"
									description="22.06.2024 18:00"
								/>
							</div>
						</div>
					</div>
				</FloatingPanel>
			) : null}
		</MainLayout>
	);
});

