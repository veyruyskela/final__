import React, {Component} from "react";
import InputMask from 'react-input-mask';

class Inputs extends Component{
    render() {
        const {label,type,placeholder,onChange,mask,pattern,title} = this.props;
        return (
                    <div className={'create-post__form-item'}>
                        <p className={'create-post__form-label'}> {label} </p>
                        <InputMask type={type} className={'create-post__form-input'} title={title} mask={mask} pattern={pattern} onChange={onChange} placeholder={placeholder} required/>
                    </div>


        );
    }
}


export default Inputs;