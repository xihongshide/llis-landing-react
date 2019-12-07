import React, { Component } from 'react';
import $ from "jquery";
import Velocity from 'velocity-animate';

class Blog extends Component {
    componentDidMount(){
        $("#blog_coming p").blast({ delimiter: 'letter' });

        Velocity($("#blog-header"), "transition.slideLeftBigIn", {opacity: 1, duration: 200, delay: 800});

        $("#blog_coming p").find("span").each(function(i){
            let str = $(this).html();
            let e = $(this);

            $(e).html("&nbsp;|");
            Velocity($(e), {opacity: 1}, {duration: 50, delay: 1000+i*100, complete:() => {
                $(e).html(str);
            }});
        });
    }

    render() {
        return (
            <div className="content blog">
                <div className="container blog-container">
                   <div className="inner-container blog-inner-container">
                       <p id="blog-header" className="velocity-animate">
                          <b className="declare-color">const</b>&nbsp;
                          <b className="class-color">Blog</b>
                          &nbsp;&#61;&nbsp;(props)&nbsp;
                          <b className="declare-color">&#61;></b>
                          &nbsp;(
                       </p>
                       <div id="blog_coming">
                           <p>
                               <b className="tag-color">&lt;div</b> &nbsp;
                               <b className="prop-color">className</b>&#61;
                               <b className="propstr-color">&quot;llis-bolg-container&quot;</b>&nbsp;
                               <b className="prop-color">state</b>&#61;
                               &#x7b;isBuilding&#x7d;
                               <b className="normal-color">&gt;</b>
                           </p>
                           <p>
                               <b className="tag-color"> &lt;p&gt;</b>
                               <b className="normal-color">Under Construction</b>
                               <b className="tag-color">&lt;&frasl;p&gt;</b>
                           </p>
                           <p>
                               <b className="tag-color"> &lt;p&gt;</b>
                               <b className="normal-color">Working day and nigh</b>
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

export default Blog;
