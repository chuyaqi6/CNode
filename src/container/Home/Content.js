import React, { Component } from 'react'
export default class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            props:props
        }
    }
    componentDidMount() {
        let page = this.props.match.params.page;
        let idx = this.props.match.params.idx;
        let type = this.state.props.location.pathname.split('/')[3];
        console.log(type)
        if(type === 'all'){
            fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data[idx].content
                })
            });
        }
        else if(type === 'ask'){
            fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data[idx].content
                })
            });
        }
        else if(type === 'share'){
            fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data[idx].content
                })
            });
        }
        else if(type === 'good'){
            fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data[idx].content
                })
            });
        }
        else if(type === 'job'){
            fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data[idx].content
                })
            });
        }
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.page!==this.props.match.params.page){
            let idx = this.props.match.params.idx;
            let page = this.props.match.params.page;
            let type = this.state.props.location.pathname.split('/')[3];
            console.log(type)
            if(type === 'all'){
                fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data[idx].content
                    })
                });
            }
            else if(type === 'ask'){
                fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data);
                    this.setState({
                        data:res.data[idx].content
                    })
                });
            }
            else if(type === 'share'){
                fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data[idx].content
                    })
                });
            }
            else if(type === 'good'){
                fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data[idx].content
                    })
                });
            }
            else if(type === 'job'){
                fetch('https://cnodejs.org/api/v1/topics?tab='+type+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data[idx].content
                    })
                });
            }
        };
    }
    render() {
        return(
            <div dangerouslySetInnerHTML={{__html:this.state.data}} ></div>
        )
    }
}
