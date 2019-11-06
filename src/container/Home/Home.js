import React, { Component } from 'react'
import {Route,NavLink,Redirect} from "react-router-dom"
import All from './All'
import Good from './Good'
import Share from './Share'
import Job from './Job'
import Ask from './Ask'
import Content from './Content'
import './Home.css'
export default class Home extends Component {
    render() {
        //获取路径
        let url = this.props.match.url
        return (
            <div>
                <div className="link">
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/all/1"}>全部</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/good/1"}>精华</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/share/1"}>分享</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/ask/1"}>问答</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/job/1"}>招聘</NavLink>
                </div>
                <div style={{backgroundColor:"#fff"}}>
                    <Route path={url+'/all/:page'} component={All}/>
                    <Route path={url+'/good/:page'} component={Good}/>
                    <Route path={url+'/share/:page'} component={Share}/>
                    <Route path={url+'/ask/:page'} component={Ask}/>
                    <Route path={url+'/job/:page'} component={Job}/>
                    <Route path={url+'/content/all/:page/:idx'} component={Content}/>
                    <Route path={url+'/content/ask/:page/:idx'} component={Content}/>
                    <Route path={url+'/content/share/:page/:idx'} component={Content}/>
                    <Route path={url+'/content/good/:page/:idx'} component={Content}/>
                    <Route path={url+'/content/job/:page/:idx'} component={Content}/>
                    <Redirect from='/' to='/home/all/1'></Redirect>
                </div>
            </div>
        )
    }
}