import { FC, ReactNode } from "react";

import './index.scss'
import { CustomTag } from "../CustomTag";

export interface ListItemProps {
    title?:string | null,
    button?:ReactNode | null,
    control?:ReactNode | null,
    style?:object,
} 

export const ListItem:FC<ListItemProps> = (props) => {
    return (
        <div className="list-item" style={props.style}>
            <div className="list-item__button">
                {props.button}
            </div>
            <div className="list-item__title">
                <p>{props.title}</p>
            </div>
            <div className="list-item__control">
                {props.control}
            </div>
        </div>
    )
}