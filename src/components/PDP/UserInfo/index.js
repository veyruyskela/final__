import React, {Component} from "react";

class UserInfo extends Component{
    render() {
        const {content,title} = this.props;
        return(
            <div className={'donate-details__subtitle'}>
                <span>{title}:</span>
                <span className={'donate-details__content'}>{content}</span>
            </div>
        )
    }
}

export default UserInfo;