import React from 'react';
import { Link } from "react-router-dom";
import  Apicall  from './ApiCall';

class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.state={
            passwordError:false,
            nameError: false,
            mailError: false,

            name: '',
            mail: '',
            password:'',
            passwordBis: '',
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) =>{      
        const{name, value} = event.currentTarget;
       // console.log(name, value)

        const checkVar = String(value);
        if(checkVar.length > 100) return;

        this.setState({[name]: value});
    }

    componentDidUpdate(){console.log(this.state)}

    handleSubmit = () =>{
        let data = {};
        data.mail = this.state.mail;
        data.password = this.state.password;
        data.name = this.state.name;

        console.log("handlesubmit()", data)
        const dataKeys = Object.keys(data);
        let validateData =  false;

        if(this.state.password !== this.state.passwordBis) return;

        for (const key of dataKeys) {
            if(data[key] === null || data[key] === undefined || data[key] === '') {validateData = false; break;}
            else validateData = true;
        }

        console.log(validateData)
        if(this.state.passwordError || this.state.nameError || this.state.mailError || !validateData) return;
        console.log("Send request")
         Apicall.signUp(data);
    }

    render(){
    
      return (    
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Inscription</h1>
                    <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="name" className="sr-only">Nom</label>
                      <input onChange={this.handleChange} id="name" name="name" value={this.state.name} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nom"/>
                    </div>
                    <div>
                      <label htmlFor="mail" className="sr-only">Adresse E-mail</label>
                      <input onChange={this.handleChange} id="mail" name="mail" value={this.state.mail}  type="mail"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mail"/>
                    </div>
                  </div>
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="password" className="sr-only">Mot de passe</label>
                      <input onChange={this.handleChange} id="password" name="password" value={this.state.password} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mot de passe"/>
                       </div>
                    <div>
                      <label htmlFor="passwordBis" className="sr-only">Confirmation du mot de passe</label>
                      <input onChange={this.handleChange} id="passwordBis" name="passwordBis" value={this.state.passwordBis} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mot de passe"/>
                    </div>
                  </div>
                  

                    <button type="submit" onClick={this.handleSubmit} className="group relative w-full flex justify-center mt-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Inscription
                    </button>

                </div>

                <div className="text-grey-dark mt-6">
                    Vous avez déjà un compte ? 
                    <p className="no-underline border-b border-blue text-blue" href="../login/">
                        <Link className='no-underline border-b border-blue text-blue' to="../signin">Connexion.</Link>
                    </p>                
                </div>
            </div>
        </div>
      ); 

    }
    
  
}

export default SignUp;