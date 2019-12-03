import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

const WechatModal = () => (
    <div className="modal fade wechat-modal" id="wechat_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <img src="/images/wechat-qr.jpg" />
                </div>
            </div>
        </div>
    </div>
);

export default WechatModal;
