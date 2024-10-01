import { FC } from "react";

import { MainLayout } from "../../Layouts";
import { BotCard } from "../../components";

import "./index.scss"

export const BotsOverview:FC = () => {
	return (
		<MainLayout>
			<div className="bots-overview">
                <h1>Active Bots</h1>
                
                <div className="bots-overview__container">
                    <div className="container-block">
                        <div className="container-block__bot-cards">
                            <BotCard/>
                            <BotCard/>
                            <BotCard/>
                            <BotCard/>
                        </div>
                    </div>
                </div>
            </div>
		</MainLayout>
	);
};
