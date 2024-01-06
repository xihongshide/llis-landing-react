import React, { Component } from 'react';
import $ from "jquery";
import Velocity from 'velocity-animate';

class UnderConstruction extends Component {
    componentDidMount(){
        $("#coming_soon p").blast({ delimiter: 'letter' });
        Velocity($("#blog-header"), "transition.slideLeftBigIn", {opacity: 1, duration: 200, delay: 800});
        $("#coming_soon p").find("span").each((i, ele) => {
            let str = $(ele).html();
            let e = $(ele);

            $(e).html("&nbsp;|");
            Velocity($(e), {opacity: 1}, {duration: 50, delay: 1000+i*100, complete:() => {
                $(e).html(str);
            }});
        });
    }

    render() {
        return (
            <div className="content construction">
                <div className="container construction-header">
                   <div className="inner-container construction-inner-container">
                       <p id="construction-header" className="velocity-animate">
                          <b className="declare-color">const</b>&nbsp;
                          &nbsp;&#61;&nbsp;(props)&nbsp;
                          <b className="declare-color">&#61;></b>
                          &nbsp;(
                       </p>
                       <div id="coming_soon">
                           <p>
                               <b className="tag-color">&lt;div</b> &nbsp;
                               <b className="prop-color">className</b>&#61;
                               <b className="propstr-color">&quot;container&quot;</b>&nbsp;
                               <b className="prop-color">isBuilding</b>&#61;
                               &#x7b;props.isBuilding&#x7d;
                               <b className="tag-color">&gt;</b>
                           </p>
                           <p>
                               <b className="tag-color"> &lt;p&gt;</b>
                               <b className="normal-color">Under Construction</b>
                               <b className="tag-color">&lt;&frasl;p&gt;</b>
                           </p>
                           <p>
                               <b className="tag-color"> &lt;p&gt;</b>
                               <b className="normal-color">Working day and night</b>
                               <b className="tag-color">&lt;&frasl;p&gt;</b>
                           </p>
                           <p><b className="tag-color">&lt;&frasl;div&gt;</b></p>
                           <p><b className="normal-color">);</b></p>
                           <p className='type-indicator'><b className="normal-color">|</b></p>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default UnderConstruction;
