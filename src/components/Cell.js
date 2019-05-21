import React,{Component} from "react";
import "../assets/css/Cell.css"
import {Link} from "react-router-dom";
class Cell extends Component{

    render(){
        let {cell,dataName} = this.props;
        return (
            <div className="cell">
                {
                    cell.map((items)=>(
                        <Link
                        key={items.id}
                        to={{
                            pathname:'/detail/' + items.id,
                            search:"?dataName=" + dataName
                          }}>
                            <h3>{items.title}</h3>
                            <p>{items.des}</p>
                        </Link>
                    ))
                }
            </div>
        )
    }
}
export default Cell;