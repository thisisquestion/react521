import React,{Component} from "react";
import axios from "axios";
import Cell from "../components/Cell";
let pad = {
    paddingTop:48
}
class Follow extends Component{
    state = {
        cell : []
    }
    render(){
        return (
            <div className="Follow" style={pad}>
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <button className="bar-button back-button" onClick={()=>{
                            this.props.history.go(-1);
                        }} dwz-event-on-click="click"><i className="icon icon-back"></i></button>
                        <div className="header-title">
                            <div className="title">热点新闻</div>
                        </div>
                    </div>
                </div>
                <Cell cell={this.state.cell} dataName="follow"></Cell>
            </div>
        )
    }
    async componentDidMount(){
        let res =await axios({
            url:"/mock/follow"
        })
        this.setState({
            cell:res.data.page_data
        })
        
    }
}
export default Follow;