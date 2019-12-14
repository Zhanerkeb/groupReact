import React,{Component} from 'react'
import {Menu,Icon,Row,Col} from 'antd'
import './header.css'
import logo from  '../../logo.svg'
import {Link,withRouter} from "react-router-dom";
import * as firebase from "firebase";
class Header extends Component{
    constructor(){
        super();
        this.state={
            auth:false
        }

    }
    logOut=()=>{
        firebase.auth().signOut().then(r => {
                this.props.history.push("/")
            }).catch(error=>{
            console.log(error)
        })

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log(user.providerData)
                this.setState({
                    auth:true
                })
            }


    })
    }
    render(){
        return(
            <div className="header">
                <Row gutter={16}>
                    <Col span={8}>
                        <img className="img" src={logo} alt=""/>
                    </Col>
                    <Col span={16}>
                    <Menu mode="horizontal">
                        <Menu.Item key="1">
                            <Link to={'/'}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            Blog
                        </Menu.Item>
                        <Menu.Item key="3">
                            Gallery
                        </Menu.Item>
                        <Menu.Item key="4">
                            Help
                        </Menu.Item>
                        {this.state.auth  ? <Menu.Item onClick={this.logOut} key="5">
                          Log out
                        </Menu.Item>  : <Menu.Item key="5">
                            <Link to={'/signup'}>Sign up</Link>
                        </Menu.Item> }

                    </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Header)