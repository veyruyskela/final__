import React, {Component} from 'react';
import './index.scss'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    searchItem(event) {
        event.preventDefault();
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
            .then(response => response.json())
            .then(result => {
                const item = result.filter(obj => obj.title.toLowerCase().includes(this.state.value.toLowerCase()));
                if(item.length!==0){
                    item.forEach(i=>
                        console.log(i)
                    )
                }else(
                    console.log('No items')
                )
            })
    }

    render() {
        return (
            <div className={"header__search-container hidden"}>
                <form className={"header__search-form"}>
                    <input className={'header__search-input'} type={"text"} placeholder={"Search for item"}
                           name={"search"} value={this.state.value} onChange={this.handleChange}/>
                    <button className={'header__cancel-btn'} onClick={removeSearchContainer}><i
                        className="fas fa-times"/></button>
                    <button className={'header__search-btn'}  onClick={this.searchItem}>Search</button>
                </form>
            </div>
        )
    }
}

function removeSearchContainer(e) {
    e.preventDefault();
    document.querySelector('.header__search-container').classList.add('hidden');
}

export default Search;