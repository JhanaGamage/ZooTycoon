import React from 'react';
import { ZooManager } from '../scripts/ZooManager';
import ZooClock from '../scripts/Clock';
import { Avatars } from '../img/Avatars';

class App extends React.Component{

    constructor(){
        super();

        this.manager = new ZooManager();

        this.state={
          humans : this.manager.GetAllObjectsOfType('spiders')
        }
        //this.avatars = Avatars.getAvatars();
        this.interval = null;
        console.log(this.state.humans)

    }


    componentDidMount() {
      this.interval = setInterval(() => this.setState({ humans : this.manager.GetAllObjectsOfType('spiders')}), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    componentDidUpdate(){
      //console.log('EEEEEEEEEEEEsEE ')
    }

    render(){
      return (    
        <>
            <div className='m-5 h-56 grid grid-cols-3 gap-4 text-center content-center'>
                <p>Le zoo</p>
                <p className="font-sans ...">Fou ...</p>
                <p className="font-serif ...">Fou ...</p>
                <p className="font-mono ...">Fou ...</p>
               
                <button onClick={this.save} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded-full">
                    Sauvegarder la partie
                </button>
                <div className='m-auto'>
                      <ZooClock/>  
                </div>
           

            </div>  
            <div className='mx-5 grid grid-cols-2 gap-4 text-center content-center'>
                {Object.keys(this.state.humans).map((human) =>  
                    <div key={this.state.humans[human].name}  className="flex font-sans w-50">
                        <div className="flex-none w-56 relative">
                          <img src="https://c1.thejournal.ie/media/2019/06/graham-27-752x501.png" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        </div>
                        <form className="flex-auto p-6">
                          <div className="flex flex-wrap">
                            <h1 className="flex-auto font-medium text-slate-900">
                              {this.state.humans[human].name}
                            </h1>
                            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-600">
                              {this.state.humans[human].health}
                              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: this.state.humans[human].health * 10 + "%" }}></div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-slate-400">
                               En vie
                            </div>
                          </div>                       
                          <div className="flex space-x-4 mb-5 text-sm font-medium">
                           
                            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm text-slate-500">
                              *Date de création ?*
                          </p>
                        </form>
                    </div>
                )}
            </div>
        </>
      ); 
    }
  
}

export default App;