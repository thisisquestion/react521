import React,{Component} from "react";
import u1 from "../assets/images/icon/u-1.png"
import u2 from "../assets/images/icon/u-2.png"
import u3 from "../assets/images/icon/u-3.png"
import u4 from "../assets/images/icon/u-4.png"
import u5 from "../assets/images/icon/u-5.png"
import u6 from "../assets/images/icon/u-6.png"
import u7 from "../assets/images/icon/u-7.png"
let name={
    color:"white"
}
let baseUrl = "http://localhost:3000";



class User extends Component{

    render(){
        return (
            <div className="User">
                    <div className="my-info">
                        <div className="my-info-background"></div>
                        <img className="my-avatar" src={ baseUrl + this.props.data.data.icon}/>
                        <span className="name" >欢迎登陆</span>
                    </div>
                    <div className="aui-list-cells">
                        <a href="me.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u1}/></div>
                            <div className="aui-list-cell-cn">个人信息</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <a href="me-home.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u2}/></div>
                            <div className="aui-list-cell-cn">发现</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <a href="me-security.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u3}/></div>
                            <div className="aui-list-cell-cn">安全中心</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <a href="me-wallet.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u4}/></div>
                            <div className="aui-list-cell-cn">我的钱包</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <div className="devider b-line"></div>
                        <a href="me-history.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u5}/></div>
                            <div className="aui-list-cell-cn">浏览历史</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <a href="me-set.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u6}/></div>
                            <div className="aui-list-cell-cn">设置</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                        <div className="devider b-line"></div>
                        <a href="login.html" className="aui-list-cell">
                            <div className="aui-list-cell-fl"><img src={u7}/></div>
                            <div className="aui-list-cell-cn" onClick={()=>{
                                window.localStorage.removeItem("user");
                            }}>退出</div>
                            <div className="aui-list-cell-fr"></div>
                        </a>
                    </div>
            </div>
        )
    }
  
}
export default User;