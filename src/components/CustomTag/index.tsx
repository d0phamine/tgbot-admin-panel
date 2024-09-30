import { FC } from "react";

import './index.scss'

export interface CustomTagProps {
    tagname:string,
    color?:string
}

export const CustomTag:FC<CustomTagProps> = (props) => {
    return(
        <div className="custom-tag" style={{backgroundColor:props.color}}>
            <p>{props.tagname}</p>
        </div>
    )
}