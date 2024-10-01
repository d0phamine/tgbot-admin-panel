import { FC } from "react";
import { observer } from "mobx-react-lite";

import { MainLayout } from "../../Layouts";
import { BotCard } from "../../components";
import { useStores } from "../../store";

import "./index.scss";

export const BotsOverview: FC = observer(() => {
	const data = [
		{
			name: "TG-bot-001",
			eventsAmount: 300,
			usersAmount: 36,
		},
		{
			name: "TG-bot-002",
			eventsAmount: 500,
			usersAmount: 56,
		},
		{
			name: "TG-bot-003",
			eventsAmount: 136,
			usersAmount: 43,
		},
	];

	return (
		<MainLayout>
			<div className="bots-overview">
				<h1>Active Bots</h1>

				<div className="bots-overview__container">
					<div className="container-block">
						<div className="container-block__bot-cards">
							{data.map(
								(
									item: {
										name: string,
										eventsAmount: number,
										usersAmount: number,
									},
									index,
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
									/>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
});

