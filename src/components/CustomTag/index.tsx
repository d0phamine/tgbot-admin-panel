import { FC } from "react";

import './index.scss'

export interface CustomTagProps {
    tagname:string,
    style?:object
}

export const CustomTag:FC<CustomTagProps> = (props) => {
    return(
        <div className="custom-tag" style={props.style}>
            <p>{props.tagname}</p>
        </div>
    )
}