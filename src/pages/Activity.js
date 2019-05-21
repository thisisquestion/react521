import React,{Component} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
let pad = {
    paddingTop:48
}
class Activity extends Component{
    state = {
        data:[]
    }
    render(){
        return (
            <div className="Activity" style={pad}>
            <div className="">
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <button className="bar-button back-button" onClick={()=>{
                            this.props.history.go(-1);
                        }} dwz-event-on-click="click"><i className="icon icon-back"></i></button>
                        <div className="header-title">
                            <div className="title">最新活动</div>
                        </div>
                    </div>
                </div>
                {
                    this.state.data.map((items)=>(
                        <Link key={items.id} to={
                            {
                                pathname:"/detail/"+items.id,
                                search:"?dataName=activity"
                            }
                        } >
                            <img src={items.banner}/>
                        </Link>
                    ))
                }
            </div>
        </div>
        )
    }
    async componentDidMount(){
        let res = await axios({
            url:"mock/activity",
        })
        this.setState({
            data:res.data.page_data
        })
    }
}
export default Activity;