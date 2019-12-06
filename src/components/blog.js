import React, { Component } from 'react';
import CodeAniElements from './partialComponents/codeView.js';

class Blog extends Component {
   render() {
      return (
         <div className="content blog">
            <div className="container blog-container">
               <div className="inner-container">
                   <h1>&lt; Building &frasl; &gt;</h1>
                   <CodeAniElements />
               </div>
            </div>
         </div>
      );
   }
}

export default Blog;
