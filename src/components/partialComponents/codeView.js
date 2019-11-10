import React from 'react';
const codeAniElements = ['1', '2', '3', '4', '5', '6', '7'];

const CodeView = () => (
    <div className="code-view-container about-icon">
        <div className="code-view">
            {codeAniElements.map((value, index) => {
                return <span key={`line_${index+1}`} className={`line-${index+1}`}></span>;
            })}
        </div>
    </div>
);

export default CodeView;
