import React,{Component} from "react";
import '../assets/css/Detail.css'
import zan from '../assets/images/zan.png';
import xing from '../assets/images/xing.png';
import fx from '../assets/images/fx.png';

import axios from 'axios';
import querystring from 'query-string'

class Detail extends Component {
  state={
    data:{}
  }
  render() {
    let data = this.state.data;
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
          </ul>
        </div>
        {
          data.title && (
            <div className="content">
              <div className="header clear"><h2><img src={data.detail.auth_icon} alt=""/></h2><p>{data.detail.auth}</p></div>
              <div className="cont">
                <h3>{data.title}</h3>
                <div className="time"><p>{data.time}<span><img src={zan} alt=""/></span></p>
                </div>
                <div className="text-box" dangerouslySetInnerHTML={{__html:data.detail.content}}></div>
              </div>
            </div>
          )
        }
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="javascript:;">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="javascript:;">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
    );
  }
  async componentDidMount(){
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    let res = await axios({url:`/mock/${dataName}/${id}`});
    console.log(res.data.page_data);
    this.setState({data:res.data.page_data})
  }
}

export default Detail;