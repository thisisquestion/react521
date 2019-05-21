import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios"
import qq from "../assets/images/qq.png"
import wx from "../assets/images/wx.png"
import wb from "../assets/images/wb.png"

let h1={
    height:"64px"
}
let web = {
    margin:"0 auto"
}
let reg = {
    marginLeft:196,
    color:"red"
}
class Reg extends Component{
    state = {
        username : "",
        password : ""
    }
    submit(){
        let formDate = new FormData();
        formDate.append("username",this.state.username);
        formDate.append("password",this.state.password);
        axios({
            url:"/api/reg",
            data:formDate,
            method:"POST"
        }).then((res)=>{
            if(res.data.error===0){
                this.props.history.push("/login");
                // window.localStorage.setItem("user",JSON.stringify(res.data))
            }else{
                alert("账号名称冲突！")
            }
        })
    }
    render(){
        return (
            <div className="Login" >
                    <div className="header">
                        <div className="header-background"></div>
                        <div className="toolbar statusbar-padding">
                            <button className="bar-button back-button" onClick={()=>{
                            this.props.history.go(-1);
                        }} dwz-event-on-click="click"><i className="icon icon-back"></i></button>
                            <div className="header-title">
                                <div className="title">注册</div>
                            </div>
                        </div>
                    </div>

                    <div id="login"></div>
                    <div className="login_bg">
                        <div style={h1}></div>
                        <form action="" style={web}>
                            <div className="userName b-line">
                                <span>用户名：</span>
                                <input type="text" name="name" placeholder="请输入用户名" pattern="[0-9A-Za-z]{6,16}" required value={this.state.username} onChange={(ev)=>{
                                    this.setState({
                                        username:ev.target.value
                                    })
                                }}/>
                            </div>
                            <div className="passWord b-line">
                                <span>密&nbsp;&nbsp;&nbsp;码：</span>
                                <input type="password" name="password" placeholder="请输入密码" pattern="[0-9A-Za-z]{6,25}" required value={this.state.password} onChange={(ev)=>{
                                    this.setState({
                                        password:ev.target.value
                                    })
                                }}/>
                            </div>
                            <div className="choose_box">
                                <div>
                                    <span>记住密码</span>
                                </div>
                                <a href="#">忘记密码</a>
                            </div>
                            <button className="login_btn" onClick={this.submit.bind(this)}>注&nbsp;&nbsp;册</button>
                        </form>
                        <Link style={reg} to="/login">已有账号，去登录.....</Link>
                        <div className="other_login">
                            <div className="other"></div>
                            <span>其他方式登录</span>
                            <div className="other"></div>
                        </div>
                        <div className="other_choose">
                            <a href="">
                                <img src={qq} alt=""/>
                            </a>
                            <a href="">
                                <img src={wx} alt=""/>
                            </a>
                            <a href="">
                                <img src={wb} alt=""/>
                            </a>
                        </div>
                    </div>
            </div>

        )
    }
}
export default Reg;