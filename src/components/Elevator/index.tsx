import { FC, useEffect, useState, useRef } from "react";

import './index.scss'

export const Elevator = (props:any) => {
    return(
        <div className="elevator" onClick={props.onClick}>
            <div className="elevator__header">
                <p>{props.header}</p>
            </div>
            <div className="elevator__content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}