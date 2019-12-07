import React,{Component} from 'react'
import Header from "../header";
import {Button, Card, Col, Row, Modal, Form,Input} from "antd";
import FormItem from "antd/es/form/FormItem";
class Main extends Component  {
    constructor(){
        super();
        this.state={
            count:0,
            name:"Zhanerke",
            show:false,
            visible:false,
            id:null,
            title:'',
            description:'',
            author:'',
            editVisible:false,
            edittitle:'',
            editdescription:'',
            editauthor:'',
            editid:'',
            idGlobal:null,
        }
    }

    handleOpenModal=()=>{
        this.setState({
            visible:true,
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false,
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    handleOk=()=>{
        let data =    {
            id:this.state.id,
            title:this.state.title,
            description:this.state.description,
            author:this.state.author,
        }
        this.props.blog.push(data);
        this.setState({
            visible:false,
            id:null,
            title:'',
            description:'',
            author:'',
        })
    }
    handleDelete=i=>{
      this.props.blog.splice(i,1);
      this.setState({

      })
    }
    handleOpenEditModal=(item,i)=>{
        this.setState({
            editVisible:true,
            edittitle:item.title,
            editdescription:item.description,
            editauthor:item.author,
            editid:item.id,
            idGlobal:i
        })
    };
    handleEditCancel=()=>{
        this.setState({
            editVisible:false,
        })
    };

    handleEditOk=()=>{
        let data ={
            id:this.state.editid,
            title:this.state.edittitle,
            description:this.state.editdescription,
            author:this.state.editauthor,
        }
        this.props.blog.splice(this.state.idGlobal,1,data);
        this.setState({
            editVisible:false,
            editid:null,
            edittitle:'',
            editdescription:'',
            editauthor:'',
        })
    }

render() {
       const {blog} = this.props;
       const {id,title,description,author,editid,edittitle,editdescription,editauthor}=this.state;

       let blogItem = blog.map((item,i)=>(
           <Col span={6} key={i}>
               <Card key={i} title="Default size card" extra={<div><p style={{cursor:"pointer"}} onClick={()=>this.handleDelete(i)} >Delete</p><p style={{cursor:"pointer"}}  onClick={()=>this.handleOpenEditModal(item,i)}>Edit</p></div>} style={{ width: 300 }}>
                   <p>{item.title}</p>
                   <p>{item.description}</p>
                   <p>{item.author}</p>
               </Card>
           </Col>
       ))
        return(
            <div className="main">
                 <Header/>
                 <Row gutter={[16,16]}>
                    {blogItem}
                 </Row>

                <Button onClick={this.handleOpenModal}>Add blog</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}

                >
                   <Form>
                       <FormItem>
                           <Input name="id" value={id}  onChange={this.onChange} placeholder="Enter id"/>
                       </FormItem>
                       <FormItem>
                           <Input name="title" value={title} onChange={this.onChange} placeholder="Enter title"/>
                       </FormItem>
                       <FormItem>
                           <Input name="description" value={description} onChange={this.onChange} placeholder="Enter description"/>
                       </FormItem>
                       <FormItem>
                           <Input name="author" value={author} onChange={this.onChange} placeholder="Enter author"/>
                       </FormItem>
                   </Form>
                </Modal>
                <Modal
                    title="Edit Modal"
                    visible={this.state.editVisible}
                    onOk={this.handleEditOk}
                    onCancel={this.handleEditCancel}

                >
                    <Form>
                        <FormItem>
                            <Input name="editid" value={editid}  onChange={this.onChange} placeholder="Enter id"/>
                        </FormItem>
                        <FormItem>
                            <Input name="edittitle" value={edittitle} onChange={this.onChange} placeholder="Enter title"/>
                        </FormItem>
                        <FormItem>
                            <Input name="editdescription" value={editdescription} onChange={this.onChange} placeholder="Enter description"/>
                        </FormItem>
                        <FormItem>
                            <Input name="editauthor" value={editauthor} onChange={this.onChange} placeholder="Enter author"/>
                        </FormItem>
                    </Form>
                </Modal>

            </div>
        )
}

}
export default Main
