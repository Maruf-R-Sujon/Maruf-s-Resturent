import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import LoadComments from "./LoadComments";

let DishDetails = props => {
    return(
        <Card style={{margin:'10px'}}>
            <CardImg src={props.dish.image} alt={props.dish.name} style={{height:'150px', width:'150px'}}/>
            <CardBody>
                <CardTitle tag="h5" >{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
                <CardText>BDT {props.dish.price} /-</CardText>
                <CardTitle tag='h4'>Comments:-</CardTitle>
                <hr />
                <LoadComments comment={props.dish.comments}/>
            </CardBody>
        </Card>
        
    )
}

// export default DishDetails;
export default DishDetails;