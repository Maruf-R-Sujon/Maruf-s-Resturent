import React from "react";
import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";

const MenuItem = props =>{
    return(
        <div>
             <Card style={{margin:"10px" , cursor:'pointer'}} onClick={props.selecteDish}>
                <CardImg alt={props.dish.name} src={props.dish.image} style={{opacity:"0.5", height:'100px, width:100px'}}/>
                <CardImgOverlay>
                    <CardTitle tag="h3" className="text-light bg-dark text-center">{props.dish.name}</CardTitle>
                </CardImgOverlay>
             </Card>
        </div>
    )
};


export default MenuItem;