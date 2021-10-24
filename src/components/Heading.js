import React from 'react'
import { useContext } from 'react';
import Badge from "react-bootstrap/Badge";
import previewContext from '../contexts/PreviewContext';
import { isMobile } from 'react-device-detect';
const Heading = () => {
    const context = useContext(previewContext);
    const {previewType,toggleType} = context;

    const handleClick = ()=>{
        console.log(previewType);
        toggleType()
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col text-center">
                    <h1>
                        <Badge className="text-align-center bg-light text-dark" variant="light">
                            Markdown Previewer
                        </Badge>
                    </h1>
                </div>
            </div>
            { !isMobile &&
            <div className="my-4 text-center">
                <button className="btn btn-primary" onClick={handleClick}>
                    Preview {previewType}
                </button>
            </div>
}   
        </div>
    )
}

export default Heading
