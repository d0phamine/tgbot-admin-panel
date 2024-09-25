import { FC, useEffect, useState, useRef } from "react";
import { MainLayout } from "../../Layouts";

import './index.scss'
import { Elevator } from "../../components";

export const MainPage:FC = () => {
    return(
        <MainLayout>
            <div className="main-page">
                <div className="main-page__block-panel">
                    <div className="block-panel-header">
                        <h1>Admin Panel</h1>
                    </div>
                    <div className="block-panel-info">
                        <Elevator/>
                        <Elevator/>
                    </div>
                </div>
                <div className="main-page__recent-panel"></div>
            </div>
        </MainLayout>
    )
}