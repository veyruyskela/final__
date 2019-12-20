import React, {Component} from 'react';
import './index.scss';
import './media-header.scss';
import BurgerLine from "../BurgerLine/index";
import ItemOfCategories from "../ItemOfCategories";
import Search from "../../HomePage/Search/index";

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
                    filterByType('donate');
                }
            },
            {
                content:'Take it',
                handler: function (event) {
                    event.preventDefault();
                    filterByType('take it');
                }
            }
        ];

        return (
        <div className={'header'}>

                <a className={'header__logo'} href={'/'}>Believe in Tomorrow</a>
               <a href={'/new'}className={'header__create-post-btn'}><i className="fas fa-plus"/></a>
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
            <Search/>
        </div>
    )
    }

}
function filterByType(type){
    fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
        .then(response => response.json())
        .then(result => {
            const items = result.filter(obj => obj.type===type);
            const activeItems = items.filter(item => item.isActive === true);
            if(activeItems.length!==0){
                activeItems.forEach(i=>
                    console.log(i)
                )
            }else(
                console.log('No items')
            )
        })
}
function toggleSearchContainer(e) {
    e.preventDefault();
    document.querySelector('.header__search-container').classList.toggle('hidden');
    document.querySelector('.header__search-input').value='';
}

export default Header;