import React,{Component} from "react";
import tz1 from "../assets/images/icon/tz-1.png"
import tz2 from "../assets/images/icon/tz-2.png"
let pad = {
    paddingTop:48
}

class News extends Component{
    render(){
        return (
            <div className="News" style={pad} >
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <button className="bar-button back-button" onClick={()=>{
                            this.props.history.go(-1);
                        }} dwz-event-on-click="click"><i className="icon icon-back"></i></button>
                        <div className="header-title">
                            <div className="title">消息</div>
                        </div>
                    </div>
                </div>
                <div className="aui-list-cells">
                    <a href="javascript:;" className="aui-list-cell aui-list-cell-s">
                        <div className="aui-list-cell-fl"><img src={tz1}/></div>
                        <div className="aui-list-cell-cn">通知消息</div>
                        <div className="aui-list-cell-fr"></div>
                    </a>
                    <a href="javascript:;" className="aui-list-cell aui-list-cell-s">
                        <div className="aui-list-cell-fl"><img src={tz2}/></div>
                        <div className="aui-list-cell-cn">互动消息</div>
                        <div className="aui-list-cell-fr"></div>
                    </a>
                    <a href="javascript:;" className="aui-list-cell aui-list-cell-s">
                        <div className="aui-list-cell-fl"><img src={tz1}/></div>
                        <div className="aui-list-cell-cn">实时资讯</div>
                        <div className="aui-list-cell-fr"></div>
                    </a>
                </div>
            </div>
        )
    }
}
export default News;