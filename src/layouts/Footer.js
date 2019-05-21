import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Footer extends Component{
    render(){
        return (
            <div className="Footer">
                <div className="tab-bar tab-bottom" >
                    <NavLink to="/home" className="tab-button" activeClassName="active"><i className="tab-button-icon icon icon-home"></i><span className="tab-button-txt">首页</span></NavLink>
                    <NavLink to="/follow" className="tab-button" activeClassName="active"><i className="tab-button-icon icon icon-exhibition icon-exhibition-x"></i><span className="tab-button-txt">热点</span></NavLink>
                    <NavLink to="/activity" className="tab-button" activeClassName="active"><i className="tab-button-icon icon icon-service"></i><span className="tab-button-txt">活动</span></NavLink>
                    <NavLink to="/news" className="tab-button" activeClassName="active"><i className="tab-button-icon icon icon-service-x"></i><span className="tab-button-txt">消息</span></NavLink>
                    <NavLink to="/user" className="tab-button" activeClassName="active"><i className="tab-button-icon icon icon-my"></i><span className="tab-button-txt">我的</span></NavLink>



                    {/* <a className="tab-button active" href="index.html"><i className="tab-button-icon icon icon-home"></i><span className="tab-button-txt">首页</span></a>
                    <a className="tab-button cached" href="complain.html"><i className="tab-button-icon icon icon-exhibition icon-exhibition-x"></i><span className="tab-button-txt">热点</span></a>
                    <a className="tab-button cached" href="activity.html"><i className="tab-button-icon icon icon-service"></i><span className="tab-button-txt">活动</span></a>
                    <a className="tab-button cached" href="news.html"><i className="tab-button-icon icon icon-service-x"></i><span className="tab-button-txt">消息</span></a>
                    <a className="tab-button cached" href="user.html"><i className="tab-button-icon icon icon-my"></i><span className="tab-button-txt">我的</span></a> */}
                </div>
            </div>
        )
    }
}
export default Footer;