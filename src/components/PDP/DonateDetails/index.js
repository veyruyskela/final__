import React, {Component} from "react";
import './donatedetails.scss';
import UserInfo from "../UserInfo";
class DonateDetails extends Component{
    render() {
        const {title,city,date,description,name,email,phone,category} = this.props;
        const userInfo=[
            {
                title:'Name',
                content:`${name}`
            },
            {
                title:'Email',
                content:`${email}`
            },
            {
                title:'Phone',
                content:`${phone}`
            }
        ];

        return(
            <div className={'donate-details'}>
                <h3 className={'donate-details__header'}>Title{title}</h3>
                <p className={'donate-details__city-date'}>Baku {city}, 12-04-2019 {date}</p>
                <img src={'https://via.placeholder.com/450/771796'} className={'donate-details__img'}/>
                <div className={'donate-details__desc-container'}>
                <p className={'donate-details__title'}>Description</p>
                <p>{description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur autem cupiditate, delectus dicta dignissimos earum, exercitationem iusto nesciunt numquam, officiis praesentium ratione repellat reprehenderit rerum saepe similique tempora tenetur.</p>
                    <p  className={'donate-details__title'}>Category</p>
                    <p>Books {category}</p>
                </div>
                <div className={'donate-details__user-info'}>
                <p className={'donate-details__title'}>User Info</p>
                {userInfo.map((info,index)=>{
                  return  <UserInfo
                      key={index}
                      title={info.title}
                      content={info.content}
                    />
                })}
                </div>
            </div>
        )
    }
}

export default DonateDetails;