import { FC, ReactNode } from "react";
import logotype from '../../assets/images/logo.png'

import "./index.scss";

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logotype} alt="" />
        </div>
    )
}