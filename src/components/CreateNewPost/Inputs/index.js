import React, {Component} from "react";

class Inputs extends Component{
    render() {
        const {label,type,pattern,placeholder,onChange} = this.props;
        return (
                    <div className={'create-post__form-item'}>
                        <p className={'create-post__form-label'}> {label} </p>
                        <input type={type} className={'create-post__form-input'} pattern={pattern} onChange={onChange} placeholder={placeholder} required/>
                    </div>
        );
    }
}

export default Inputs;