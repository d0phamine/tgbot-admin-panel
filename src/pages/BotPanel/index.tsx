import { FC, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SettingOutlined, ArrowUpOutlined } from "@ant-design/icons";

import "./index.scss";
import { MainLayout } from "../../Layouts";
import { CustomBanner, Elevator, CustomTag } from "../../components";

export const BotPanel: FC = () => {
	const redirect = useNavigate();
	return (
		<MainLayout>
			<div className="bot-panel">
				<div className="bot-panel__block-panel">
					<div className="block-panel-header">
						<h1>TG-bot-001</h1>
					</div>
					<div className="block-panel-bot">
						<Elevator
							title="Alive 2 weeks"
							content={
								<ArrowUpOutlined style={{ color: "#016A1C" }} />
							}
							style={{
								backgroundColor: "#E1FCDE",
								color: "#016A1C"
							}}
						></Elevator>
						<Elevator
							title="New clients"
							content="12"
							style={{
								backgroundColor: "#E0EDFF",
								color: "#105FCE"
							}}
						></Elevator>
						<Elevator
							title="Messages today"
							content="245"
							style={{
								backgroundColor: "#E0EDFF",
								color: "#105FCE"
							}}
						></Elevator>

						{/* <div className="block-panel-bot__controls">
							<Elevator
								title="Settings"
								content={
									<SettingOutlined
										style={{ fontSize: "16px" }}
									/>
								}
							/>
						</div> */}
					</div>
					<div className="block-panel-info">
						<Elevator
							title="Clients"
							content="16"
							onClick={() => redirect("/users")}
						>
							{/* <CustomTag tagname="+13,4%/hr" style={{backgroundColor:"#E1FCDE", color:"#016A1C"}} /> */}
						</Elevator>
						<Elevator title="Roles" content="2"></Elevator>
						<Elevator title="Cucumbers" content="9"></Elevator>
					</div>
				</div>
				<div className="bot-panel__recent-panel">
					<div className="recent-panel-header">
						<h2>Actions</h2>
					</div>
					<div className="recent-panel-content">
						<CustomBanner
							type="success"
							title="Succes logon"
							description="10.04.2024 18:00"
						/>
						<CustomBanner
							type="info"
							title="Message"
							description="10.04.2024 17:30"
						/>
						<CustomBanner
							type="warning"
							title="Bad credentials"
							description="13.04.2024 15:20"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
						<CustomBanner
							type="error"
							title="Bot disconnected"
							description="12.04.2024 12:00"
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

