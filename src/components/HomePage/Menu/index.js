import React, {Component} from 'react';
import './index.scss';

class Menu extends Component {
    render() {
        return (
            <div className={"categories__wrapper"}>
                <ul className={"categories__list"}>
                    <li className={"categories__list--item"}>Books</li>
                    <li className={"categories__list--item"}>Clothes/Men</li>
                    <li className={"categories__list--item"}>Clothes/Women</li>
                    <li className={"categories__list--item"}>For kids</li>
                    <li className={"categories__list--item"}>Home</li>
                </ul>
            </div>
        )
    }
}

export default Menu;