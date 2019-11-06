import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom'
let url = 'https://cnodejs.org/api/v1/topics?tab=all&page=';
export default class All extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        // let types=url.split('?')[1].split('=')[1].split('&')[0];
        // console.log(types);
        fetch(url+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch(url+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            });
        };
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.data.map((item,idx)=>(
                            <div style={{overflow:'left'}} key={idx}>
                                <div className="topicsdiv" style={{backgroundColor:'#fff'}}>
                                    <img src = {item.author.avatar_url} alt="头像"  className="img1"/>
                                    <p className="p1">{item.reply_count}/{item.visit_count}</p>
                                    <Link className="p2" to={'/home/content/all/'+`${this.props.match.params.page}`+'/'+`${idx}`}>{item.title}</Link>
                                    <p className="p3">1天前</p>
                                    <img className="img2" src = {item.author.avatar_url} alt="头像"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="tabdiv">
                    <ul style ={{float:'left'}} className="tabul">
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <li key = {item} style ={{float:'left'}} className='tabli'><Link to ={'/home/all/'+item}>{item}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
