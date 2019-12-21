import React, {Component} from "react";
import './index.scss'
import DonateDetails from "./DonateDetails";
import TakeItDetails from "./TakeItDetails";

class PDP extends Component{
    render() {
        return(
            <div>
             <DonateDetails/>
             <TakeItDetails/>
             <button className={'PDP__edit-btn PDP__btn'}>Edit</button>
             <button className={'PDP__delete-btn PDP__btn'}>Delete</button>
            </div>
        )
    }
}

export default PDP;