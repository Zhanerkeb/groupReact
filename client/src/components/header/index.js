import React,{Component} from 'react'
import {Menu,Icon,Row,Col} from 'antd'
import './header.css'
import logo from  '../../logo.svg'
class Header extends Component{
    constructor(){
        super();
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
                            <Icon type="edit" />
                            Home
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
                    </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header