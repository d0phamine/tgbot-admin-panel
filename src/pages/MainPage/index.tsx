import { FC, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../../Layouts";

import './index.scss'
import { CustomBanner, Elevator } from "../../components";


export const MainPage:FC = () => {
    const redirect = useNavigate();
    return(
        <MainLayout>
            <div className="main-page">
                <div className="main-page__block-panel">
                    <div className="block-panel-header">
                        <h1>Admin Panel</h1>
                    </div>
                    <div className="block-panel-info">
                        <Elevator header="Users" content="16" onClick={() => redirect("/users")}/>
                        <Elevator header="Roles" content="2" />
                        <Elevator header="Cucumbers" content="9"/>
                    </div>
                </div>
                <div className="main-page__recent-panel">
                    <div className="recent-panel-header">
                        <h1>Recent</h1>
                    </div>
                    <div className="recent-panel-content">
                        <CustomBanner type="success" title="Succes logon" description="10.04.2024 18:00"/>
                        <CustomBanner type="info" title="Message" description="10.04.2024 17:30"/>
                        <CustomBanner type="warning" title="User bad credentials" description="13.04.2024 15:20"/>
                        <CustomBanner type="error" title="Bot disconnected" description="12.04.2024 12:00"/>
                        <CustomBanner type="error" title="Bot disconnected" description="12.04.2024 12:00"/>
                        <CustomBanner type="error" title="Bot disconnected" description="12.04.2024 12:00"/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}