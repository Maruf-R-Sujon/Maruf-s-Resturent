import React, { Component } from "react";
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button } from "reactstrap";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
        email : "",
        number : "",
        subject : "",
        contactType : "",
        message : "",
        agreement : "",
        }
        

    }
    formSubmit = (e) => {
        console.log(e)
        e.preventDefault();
    }
    render() {
        document.title = "Resturent-Contact"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Card className="my-5">
                            <CardHeader className="text-center text-primary">
                                <h4>Send Your Opinion.....</h4>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.formSubmit}>
                                    <FormGroup>
                                        <Label for="username" >Your Name</Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            placeholder="Enter your name"
                                            value={this.state.username}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email" >Your Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={this.state.email}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="number" >Your Phone Number</Label>
                                        <Input
                                            type="number"
                                            name="number"
                                            placeholder="Enter your number"
                                            value={this.state.number}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="subject" >Your Subject</Label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Enter your subject"
                                            value={this.state.subject}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="contact type" >Contact Type</Label>
                                        <Input 
                                        type="select" 
                                        name="contactType"
                                        value={this.state.contactType}
                                        >
                                            <option value="">Select option</option>
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="message" >Your Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            placeholder="Enter your message"
                                            value={this.state.message}
                                        />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input 
                                        type="checkbox" 
                                        name="agreement" 
                                        value={this.state.agreement}
                                        />
                                        <Label for="agreement">I agree with my terms and condition</Label>
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-success">Send feedback</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 pt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365.2272759775741!2d90.93617806774498!3d22.656275802588706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754b5ff19b07a09%3A0x7e7902bebaeded32!2z4Ka44KeB4Kac4KaoIOCmt-CnjeCmn-Cni-CmsA!5e1!3m2!1sbn!2sbd!4v1681052475299!5m2!1sbn!2sbd" width="600" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        )
    }

}

export default Contact;