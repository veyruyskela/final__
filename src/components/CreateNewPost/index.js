import React, {Component} from "react";
import Inputs from "./Inputs";
import './index.scss';
import './media-createNewPost.scss';

class CreateNewPost extends Component{
    constructor(props) {
        super(props);
        this.state = {formName:'User Details Form', userId:'',valueName: '', valueEmail:'',valuePhone: '', valueCity:'', valueType:'',valueTitle:'',
            valueDescription:'', valueImage:[], categoryId:'', valueCategory:'', valueSubCategory:'',
            form1:'create-post__form', form2:'create-post__form hidden'};
        this.Next = this.Next.bind(this);
        this.Create = this.Create.bind(this);
    }

    Next(event) {
        event.preventDefault();
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/users',
            {
                method:"POST"
            })
            .then(response => response.json())
            .then(result =>{
                result.email=this.state.valueEmail;
                result.phone=this.state.valuePhone;
                result.city=this.state.valueCity;
                result.name=this.state.valueName;
                this.setState({userId:result.id});
                console.log(result)
            });
            this.setState({formName:'Post Details Form', form2:'create-post__form', form1: 'create-post__form hidden'} );
    }

    Category(){
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/categories',
            {
                method:"POST"
            })
            .then(response => response.json())
            .then(result =>{
                this.setState({categoryId:result.id});
                result.name=this.state.valueCategory;
                result.subCategory=this.state.valueSubCategory;
                console.log(result)
            })
    }

    Create(){
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts',
            {
                method:"POST"
            })
            .then(response => response.json())
            .then(result =>{
                result.type=this.state.valueType;
                result.title=this.state.valueTitle;
                result.description=this.state.valueDescription;
                result.photos= this.state.valueImage.split(';');
                result.userId=this.state.userId;
                result.isActive=true;
                result.categoryId=this.state.categoryId;
                result.date=this.Date();
                console.log(result)
                this.setState({formName:'Post Was Successfully Created! Thank You!', form2:'create-post__form hidden'} );
            })
    }

    Date(){
        const date= new Date();
        const year=date.getFullYear();
        const month=date.getMonth()+1;
        const day=date.getDate();
        return `${day}-${month}-${year}`
    }

    render() {
        const inputList=[
            {
                label:'Name',
                type: 'text',
                placeholder:'Your Name',
                handleChange: (event)=> {
                    this.setState({valueName: event.target.value});
                }
            },
            {
                label:'Email',
                type: 'email',
                placeholder:'example@example.com',
                handleChange: (event) =>{
                    this.setState({valueEmail: event.target.value});
                }
            },
            {
                label:'Phone',
                type: 'tel',
                pattern:"[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}",
                placeholder:'xxx-xxx-xx-xx',
                handleChange: (event) =>{
                    this.setState({valuePhone: event.target.value});
                }
            },
            {
                label:'City',
                type: 'text',
                placeholder:'Your City',
                handleChange: (event) => {
                    this.setState({valueCity: event.target.value});
                }
            }
        ];

        return (
            <div className={'create-post'}>
                <h2 className={'create-post__header'}>Create New Post</h2>
                <p className={'create-post__formName'}>{this.state.formName}</p>
                <form onSubmit={this.Next} className={this.state.form1} >
                    {inputList.map((input, key)=>{
                        return(
                            <Inputs
                                key={key}
                                placeholder={input.placeholder}
                                type={input.type}
                                label={input.label}
                                onChange={input.handleChange}
                                pattern={input.pattern}
                            />
                        )
                    })}
                    <input type={'submit'} value={'Next'} className={'create-post__next-btn'}/>
                </form>

                <form className={this.state.form2} onSubmit={(event)=>{
                    event.preventDefault();
                    this.Category();
                    this.Create();
                }}>
                    <fieldset className={'create-post__form-item create-post__fieldset'} onChange={(event)=>{
                        this.setState({valueType: event.target.value});
                    }}
                    >
                        <legend className={'create-post__form-label'}>I</legend>
                        <input type="radio" name="type" value="donate" required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>want to donate</span><br/>
                        <input type="radio" name="type" value="take it" required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>am looking for something</span>
                    </fieldset>
                    <div className={'create-post__form-item'}>
                        <p className={'create-post__form-label'}>Title</p>
                        <input type="text" className={'create-post__form-input'} placeholder={'Title'} required onChange={(event)=>{
                            this.setState({valueTitle: event.target.value});
                        }}/>
                    </div>
                    <div className={'create-post__form-item'}>
                        <p className={'create-post__form-label'}>Description</p>
                        <textarea placeholder={'Please enter description'} rows="5" cols="20" className={'create-post__form-input'} required onChange={(event)=>{
                            this.setState({valueDescription: event.target.value});
                        }}/>
                    </div>
                    <div className={'create-post__form-item'}>
                        <p className={'create-post__form-label'}>Add photo/photos</p>
                        <input type="text" className={'create-post__form-input'} placeholder={'URL1;URL2;...'} required onChange={(event)=>{
                            this.setState({valueImage: event.target.value});
                        }}/>
                    </div>

                    <fieldset className={'create-post__form-item create-post__fieldset'} onChange={(event)=>{
                        this.setState({valueCategory:event.target.value, valueSubCategory:event.target.dataset.sub});
                    }}>
                        <legend className={'create-post__form-label'}>Categories</legend>
                        <input type="radio" name="categories" value="books" data-sub={''} required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>Books</span><br/>
                        <input type="radio" name="categories" value="clothes" data-sub={'men'} required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>Clothes/Men</span><br/>
                        <input type="radio" name="categories" value="clothes" data-sub={'women'} required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>Clothes/Women</span><br/>
                        <input type="radio" name="categories" value="for kids" data-sub={''} required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>For kids</span><br/>
                        <input type="radio" name="categories" value="home" data-sub={''} required className={'create-post__form-radio'}/><span className={'create-post__form-radio-text'}>Home</span>
                    </fieldset>

                    <input type={'submit'} value={'Create'} className={'create-post__next-btn'}/>
                </form>
            </div>
        );
    }
}


export default CreateNewPost;