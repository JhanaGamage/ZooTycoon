import React from 'react';
import  Apicall  from './ApiCall';
import axios from 'axios';

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
          mailError: false,
          mail: '',
          password:'',
        }
    }


    handleChange = (event) =>{      
      const{name, value} = event.currentTarget;
    //  console.log(name, value)

      const checkVar = String(value);
      if(checkVar.length > 100) return;

      this.setState({[name]: value});
    }



    handleSubmit = () => {
      
      if(this.state.mailError) return;
      var data = {
        mail : this.state.mail,
        password : this.state.password
      }


      console.log("HANDLESUBMIT", this.state,  data)
      let token = null;

      const connexion = new Promise((resolve) => {
        resolve();
      });

      axios.post('http://localhost:3000/api/auth/signin', { mail: data.mail, password: data.password })
      .then(res => { this.setState({token : res.data.token}) })
      .catch(error => console.log(error))
     
    }

    componentDidUpdate(){
     
      if(this.state.token)
      { console.log('Update and send request')
        Apicall.save(this.state.token);
      }
    }

    render(){
      return (    
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous à votre compte</h2>
                 
                </div>
                  <input type="hidden" name="remember" value="true"/>
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email-address" className="sr-only">Adresse e-mail</label>
                      <input id="email-address" onChange={this.handleChange} value={this.state.mail} name="mail" type="email"autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">Mot de passe</label>
                      <input id="password" onChange={this.handleChange}  value={this.state.password}  name="password" type="password"autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mot de passe"/>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Se souvenir de moi </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Mot de passe oublié ? </a>
                    </div>
                  </div>

                  <div>
                    <button onClick={this.handleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"  />
                        </svg>
                      </span>
                      Connexion
                    </button>
                  </div>
              </div>
            </div>
        </>
      ); 
    }
  
}

export default SignIn;