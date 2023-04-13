import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import LoadComments from "./LoadComments";

class DishDetails extends Component {
    constructor(props) {
        console.log(props)
        super(props)
    }
    state = {
        openCmnt: false,
    }
    openCmnt = () => {
        this.setState({
            openCmnt: !this.state.openCmnt,
        })
    }
    closeModal = () =>{
        this.setState({
            openCmnt: !this.state.openCmnt,
        })
    }
    render() {
        return (
            <Card style={{ margin: '10px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                    </div>
                    <div className="col-md-6">
                        <CardBody>
                            <CardTitle tag="h5" >{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            <CardText>BDT {this.props.dish.price} /-</CardText>
                            <CardTitle tag='h4'>Comments:-</CardTitle>
                            <hr />
                            <button className="btn btn-success" onClick={this.openCmnt}>See Comments</button>
                            <Modal isOpen={this.state.openCmnt}>
                                <ModalBody>
                                <LoadComments comment={this.props.comment} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="btn-danger" onClick={this.closeModal}>Close</Button>
                                </ModalFooter>
                            </Modal>
                            {/* <hr /> */}
                            {/* <LoadComments comment={props.dish.comments} /> */}
                        </CardBody>
                    </div>
                </div>

            </Card>

        )
    }

}

export default DishDetails;