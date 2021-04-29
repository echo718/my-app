import React from 'react';
import '../App.css';

class Form extends React.Component {
    //props是什么   
    constructor(props)
    {
        super(props);
        this.state={value:'',
                    age:'',
                    gender:'Female',
                    phone:'',
                    message:''};

        this.Submit=this.Submit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    };
    //为什么要有event
    Submit(event){
        if(!this.state.value){
            alert("Please input your name");
        }else if(!(/^[0-9]+$/.test( this.state.age ))||this.state.age<0 || this.state.age > 100 ){
            alert("Please input right age(1-100)");
        }else{
            alert("Name:"+this.state.value+"\rAge:"+this.state.age+"\rGender:"+this.state.gender+"\rPhone:"+this.state.phone+"\rMessage" +this.state.message);
        }
       // 这是啥
        event.preventDefault();
    };
    handleChange(event){
        //[event.target.name]:event.target.value是什么过程
        this.setState({[event.target.name]:event.target.value });
    }
  render(){return (
        
            <form onSubmit={this.Submit} >
               <label>
                   <p>Name:</p>
                   <input type="text"  name="value" value={this.state.value} onChange={this.handleChange} placeholder="Your Name"/>
                </label>
               <label>
                   <p>Age:</p>
                   <input type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Your Age"/>
                </label>
                <label>
                   <p>Gender:</p>
                   <select name="gender" value={this.state.gender} onChange={this.handleChange}>          
                     <option value="Female">Female</option>
                     <option value="Male">Male</option>
                  </select>
                </label>
               <label>
                   <p>Phone:</p>
                   <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Your Phone Number"/>
                </label>
               <label>
                   <p>Message:</p>
                   <input type="text" name="message" value={this.state.message} onChange={this.handleChange} placeholder="What you want us konw"/>
                </label>
                <br/>
                <input type="submit" value="Submit" id="btn"/>
                
               
            </form>
       
      );
  }
 
}



export default Form;
