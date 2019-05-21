import React,{Component} from "react";
import Swiper from "../components/Swiper";
import Cell from "../components/Cell";
import axios from "axios";
let pad = {
    paddingBottom:55
}
class Home extends Component{
    state = {
        cell:[]
    }
    render(){
        return(
            <div className="Home" style={pad}>
                <Swiper {...this.props}></Swiper>
                <Cell cell={this.state.cell} dataName="home" {...this.props}></Cell>
            </div>
        )
    }
    async componentDidMount(){
        let res = await axios({
            url:"/mock/home",
            params:{
                _limit:10
            }
        });
        // console.log(res);
        this.setState({
            cell:res.data.page_data
        })
    }
}
export default Home;