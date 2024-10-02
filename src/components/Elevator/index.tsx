import { FC } from "react";

import './index.scss'
import { CustomTag } from "../CustomTag";

export const Elevator:FC = (props:any) => {
    return(
        <div className="elevator" onClick={props.onClick}>
            <div className="elevator__summary">
                <p>{props.content}</p>
            </div>
            <div className="elevator__title">
                <p>{props.title}</p>
            </div>
            <div className="elevator__stats">
                <CustomTag tagname="+13,4%/hr" color="#E1FCDE"/>
            </div>
        </div>
    )
}