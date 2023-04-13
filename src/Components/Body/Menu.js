import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes"
import COMMENT from "../../data/Comments";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";


class Menu extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENT,
        selecteDish: null,
        isModalOpen: false
    };
    onSelectDish = dish => {
        // console.log(dish)
        this.setState({
            selecteDish: dish
        });
        this.ModalToggle();
    }
    ModalToggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }


    render() {
        document.title = "Resturent-Menu"
        let menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    key={item.id}
                    dish={item}
                    selecteDish={() => this.onSelectDish(item)}
                    ModalTog={this.ModalToggle}
                />
            )
        });
        let dish = null;
        if (this.state.selecteDish != null) {
            const cmnt = this.state.comments.filter(comment => {
                return comment.dishID === this.state.selecteDish.id;
            })
            dish = <DishDetails
                dish={this.state.selecteDish}
                comment={cmnt}
            />
        }
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-6" >
                        {menu}
                    </div>
                    <div className="col-6">
                        {dish}
                    </div> */}
                    <Modal isOpen={this.state.isModalOpen} size="xl">
                        <ModalBody>
                            {dish}
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn-danger" onClick={this.closeModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    {menu}
                </div>
            </div>
        )
    }
}

export default Menu;