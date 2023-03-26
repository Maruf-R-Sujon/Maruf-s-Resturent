import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes"
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selecteDish: null
    };
    onSelectDish = dish => {
        // console.log(dish)
        this.setState({
            selecteDish: dish
        });
    }

    render() {
        let menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    key={item.id}
                    dish={item}
                    selecteDish={() => this.onSelectDish(item)}
                />
            )
        });
        let dish = null;
        if (this.state.selecteDish != null) {
            dish = <DishDetails dish={this.state.selecteDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6" >
                        {menu}
                    </div>
                    <div className="col-6">
                        {dish}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;