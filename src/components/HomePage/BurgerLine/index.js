import React, {Component} from 'react';

class BurgerLine extends Component {
    render() {
        const {class_name} = this.props;
        return (
            <div className={class_name}/>
        )
    }
}

export default BurgerLine;