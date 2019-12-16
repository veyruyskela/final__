import React, {Component} from 'react';
import './index.scss';
import './media-header.scss';
import BurgerLine from "../BurgerLine";
import ItemOfCategories from "../ItemOfCategories";
import logo from "../../../img/logo.png";

class Header extends Component {
    render() {
      const burgerLines=[
            {
                class_name:'header__burger-line header__burger-line1'
            },
            {
                class_name:'header__burger-line header__burger-line2'
            },
            {
                class_name:'header__burger-line header__burger-line3'
            }
        ];
        const categoryList=[
            {
                content:'Donate',
                handler: function (event) {
                    event.preventDefault();
                    filterByType('share');
                }
            },
            {
                content:'Take it',
                handler: function (event) {
                    event.preventDefault();
                    filterByType('need');
                }
            }
        ];
        return (
        <div className={'header'}>
            {/*<a href={'#'} className={'header__logo'}>Believe in Tomorrow</a>*/}
            <a href={'#'} className={'header__logo'}><img className={'header__img'} src={logo} alt={'logo'}/></a>
            <button className={'header__create-post-btn'}><i className="fas fa-plus"/></button>
            <a href={'#'} onClick={toggleSearchContainer} className={'header__search-icon'}><i className="fas fa-search"/></a>

            <div className="header__burger">
                {burgerLines.map((line, key)=>{
                    return(
                        <BurgerLine
                            key={key}
                            class_name={line.class_name}
                        />
                    )
                })}
            </div>

            <div className={'header__list-of-categories'}>
                {categoryList.map((category, key)=>{
                    return(
                        <ItemOfCategories key={key} handler={category.handler} content={category.content}/>
                    )
                })}
            </div>
        </div>
    )
    }

}
function filterByType(type){
    fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/users')
        .then(response => response.json())
        .then(result => {
            const item = result.filter(obj => obj.type===type);
            if(item.length!==0){
                item.forEach(i=>
                    console.log(i)
                )
            }else(
                console.log('No items')
            )
        })
};
function toggleSearchContainer(e) {
    e.preventDefault();
    document.querySelector('.header__search-container').classList.toggle('hidden');
    document.querySelector('.header__search-input').value='';
}

export default Header;