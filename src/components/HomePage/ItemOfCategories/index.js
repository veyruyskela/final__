import React, {Component} from "react";

class ItemOfCategories extends Component {
    render() {
        const {content,handler} = this.props;
        return (
            <a href={'/PLP'} className={'header__list-of-categories-item'} onClick={handler}>{content}</a>
        )
    }
}

export default ItemOfCategories;