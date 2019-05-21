import React,{Component} from "react";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Activity from "../pages/Activity";
import News from "../pages/News";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Error from "../pages/Error";
import AuthUser from "../pages/AuthUser";
import Detail from "../pages/Detail";
import {Switch,Route,Redirect} from "react-router-dom"

class App extends Component{
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/follow" component={Follow}></Route>
                    <Route path="/activity" component={Activity}></Route>
                    <Route path="/news" component={News}></Route>
                    <AuthUser path="/user" component={User}></AuthUser>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Redirect from="/" to="/home"></Redirect>
                    <Route component={Error}></Route>
                    
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
export default App;