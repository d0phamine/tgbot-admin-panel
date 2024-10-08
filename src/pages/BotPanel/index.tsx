import { FC, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Segmented } from "antd";
import {
	SettingOutlined,
	ArrowUpOutlined,
	EllipsisOutlined,
	UserAddOutlined
} from "@ant-design/icons";

import { MainLayout } from "../../Layouts";
import {
	CustomBanner,
	Elevator,
	CustomTag,
	Logo,
	ListItem,
	CustomSearch
} from "../../components";

import "./index.scss";

export const BotPanel: FC = () => {
	const redirect = useNavigate();
	const [segmentValue, setSegmentValue] = useState<string>("Actions");
	return (
		<MainLayout>
			<div className="bot-panel">
				<div className="bot-panel__block-panel">
					<div className="block-panel-header">
						<Logo onClick={() => redirect("/")} />
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
						<Elevator title="Clients" content="16">
							{/* <CustomTag tagname="+13,4%/hr" style={{backgroundColor:"#E1FCDE", color:"#016A1C"}} /> */}
						</Elevator>
						<Elevator title="Roles" content="2"></Elevator>
						<Elevator title="Cucumbers" content="9"></Elevator>
					</div>
				</div>
				<div className="bot-panel__recent-panel">
					<div className="recent-panel-header">
						<Segmented<string>
							options={["Actions", "Clients"]}
							value={segmentValue}
							onChange={setSegmentValue}
							style={{ background: "#161616" }}
							size="large"
						/>
						{segmentValue == "Clients" ? <Button type="text" style={{height:"36px"}} icon={<UserAddOutlined />}>Invite client</Button> : null}
					</div>
					<div className="recent-panel-search">
						<CustomSearch size="large"/>
					</div>
					<div className="recent-panel-content">
						{segmentValue == "Actions" ? (
							<>
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
							</>
						) : (
							<>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
								<ListItem
									button={<EllipsisOutlined />}
									title="Username"
									control={
										<CustomTag
											tagname="admin"
											style={{
												backgroundColor: "#B7F6D7"
											}}
										/>
									}
									style={{
										backgroundColor: "rgba(44, 44, 44, 0.5)"
									}}
								/>
							</>
						)}
					</div>
				</div>
				<Button
					color="danger"
					className="bot-panel__delete-button"
					variant="outlined"
					style={{
						background: "#1d1c1c",
						borderColor: "rgba(241, 74, 88, 0.3)",
						borderRadius: "8px",
						color:"#F14A58"
					}}
				>
					Delete bot
				</Button>
			</div>
		</MainLayout>
	);
};

