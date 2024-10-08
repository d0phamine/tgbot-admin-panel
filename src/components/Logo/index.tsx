import { FC, ReactNode } from "react";
import logotype from '../../assets/images/logo.png'

import "./index.scss";

export interface LogoProps {
    onClick?: () => void 
}

export const Logo:FC<LogoProps> = (props) => {
    return (
        <div className="logo" onClick={props.onClick}>
            <img src={logotype} alt="" />
        </div>
    )
}