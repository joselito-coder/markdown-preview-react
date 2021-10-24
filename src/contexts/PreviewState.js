import { useState } from "react";
import React from "react";
import PreviewContext from "./PreviewContext";

const PreviewState = (props) => {
    const [previewType, setPreviewType] = useState('seperate')
    const [colSize, setColSize] = useState('6')


    const toggleType = ()=>{
        if(previewType === "side by side"){
            setPreviewType("seperate");
            setColSize('6')
        }
        else{
            setPreviewType("side by side");
            setColSize('12')
        }
    }

    return (
        <PreviewContext.Provider value={{toggleType,previewType,colSize}}>
            {props.children}
        </PreviewContext.Provider>
    )
}

export default PreviewState
