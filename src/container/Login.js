import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div style={{width:'800px',height:'200px',backgroundColor:'#fff'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;用户名：<input type="text" name="username" style={{margin:'20px'}}/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;密码&nbsp;&nbsp;&nbsp;：<input type="text" name="password" style={{margin:'20px'}}/><br/>
            <Link to='/'><button style={{width:'100px',height:'40px',margin:'20px',backgroundColor:'rgb(76, 180, 250)',color:'#fff',borderRadius:'10px',border:'solid 1px'}}>登陆</button></Link>
        </div>
    )
}
