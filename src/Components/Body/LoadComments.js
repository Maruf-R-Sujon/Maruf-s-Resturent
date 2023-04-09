import React from "react";
import { CardTitle, CardText,Card } from "reactstrap";
import dateFormat from "dateformat";

let LoadComments = props => {
    return (
        props.comment.map(item => {
            return (
                <div key={item.id}>
                    <CardTitle tag='h4'>{item.author}</CardTitle>
                    <Card>{item.comment}</Card>
                    <CardText>{dateFormat(item.date, 'dddd, mmmm dS,yyyy, h:MM TT')}</CardText>
                    <hr />
                </div>
            )
        })
    )
}

export default LoadComments;