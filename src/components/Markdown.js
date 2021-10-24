import React from 'react'
import { useState } from 'react'
import marked from 'marked';    
import previewContext from '../contexts/PreviewContext';
import { useContext } from 'react';

const SubHeading = () => {
    const context = useContext(previewContext);
    const {colSize} = context;

    const inpWidth = colSize === '12' ?"60%":"90%";
    const preWidth = colSize === '12' ?"75%":"90%";

    const inputStyle = {
        width: inpWidth,
        height: "60vh",
        margin:"auto",
        padding:"10px"
    }

    const previewStyle = {
        width: preWidth,
        margin:"auto",
        padding:"1.3rem",
        backgroundColor:"#DCDCDC",
        borderRadius:"20px",
        border:"none",
        minHeight:"60vh",
        overflowWrap: "anywhere",
        textAlign: "start",
    }

    const [markdown, setMarkdown] = useState('');

    const updateMarkdown = (markdown)=>{
        setMarkdown(markdown);
    }

    const handleOnChange = (e)=>{
        updateMarkdown(e.target.value);
    }

    return (
            <div className="row mt-4 text-center">
                <div className={`col-md-${colSize} my-3 col-sm-10`}>
                    <h2>
                        <label htmlFor="input">
                            <span className="badge bg-secondary" bg="secondary"> Markdown Input </span>
                        </label>
                    </h2>
                    <div className="mark-input">
                        <textarea name="area" onChange={handleOnChange} value={markdown} className="input" id="input" style={inputStyle} cols="30" rows="10"></textarea>

                    </div>
                </div>
                <div className={`col-md-${colSize} my-3 col-sm-10`}>
                    <h2>
                        <span className="badge bg-secondary" bg="dark"> Preview </span>
                    </h2>
                    <div name="preview" id="preview" style={previewStyle} dangerouslySetInnerHTML={{__html:marked(markdown)}} >
                    </div>

                </div>
            </div>

    )
}

export default SubHeading
