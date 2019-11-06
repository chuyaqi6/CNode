import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Home from './container/Home/Home'
import Api from './container/Api'
import About from './container/About'
import Start from './container/Start'
import Login from './container/Login'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/about' component={About}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/login' component={Login}/>
                                <Redirect from='/' to='/home'/>
                            </Switch>
                        </div>
                        {/* 侧边栏：可以写死 */}
                        <div className="sider">
                            <div className="msg">
                                <p className='msgp1'>CNode：Node.js专业中文社区</p>
                                <p className='msgp2'>您可以登录或注册，也可以</p>
                                <button>通过GitHub登录</button>
                            </div>
                            <div className="img">
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                            </div>
                            <div className="topics">
                                <p id="p">无人回复的话题</p>
                                <a href=''>JavaScript PNG 图片编码和解码</a>
                                <a href=''>你好！可以吧网站做成小程序吗？</a>
                                <a href=''>只因有了它，我找到了优秀的候选人：推荐一款候选人现场编程的神器 ShowMeBug</a>
                                <a href=''>海外华人如何翻墙回国看中国电视视频?</a>
                                <a href=''>你们有没有遇到过 yarn integrity check failure 的问题？</a>
                            </div>
                            <div className="league">
                                <p id="p">积分榜&nbsp;&nbsp;TOP 100 >></p>
                                <ul>
                                    <li>21730 <a href=''>i5ting</a></li>
                                    <li>15665 <a href=''>alsotang</a></li>
                                    <li>9350 <a href=''>leapon</a></li>
                                    <li>9035 <a href=''>atian25</a></li>
                                    <li>8780 <a href=''>jiyinyiyong</a></li>
                                    <li>7315 <a href=''>yakczh</a></li>
                                    <li>6815 <a href=''>im-here</a></li>
                                    <li>6095 <a href=''>DevinXian</a></li>
                                    <li>5815 <a href=''>chapgaga</a></li>
                                    <li>5350 <a href=''>magicdawn</a></li>
                                </ul>
                            </div>
                            <div className="friend">
                                <p id="p">友情社区</p>
                                <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" id="img"/>
                                <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                                <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                            </div>
                            <div className="erweima">
                                <p id="p">客户端二维码</p>
                                <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                <p id="p1">客户端源码地址</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
