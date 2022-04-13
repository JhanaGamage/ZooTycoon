import axios from 'axios';
import React from 'react';


// All api request
export default class ApiCall extends React.Component{

    static signUp(data){
        console.log("Envoi requête d'incription");
        axios.post('http://localhost:3000/api/auth/signup', { name: data.name, mail: data.mail, password: data.password })
           .then(res => {return res.data})
           .then(res => {console.log("Inscription :", res)})
           .catch(error => console.log(error))
    }

    static signIn(data){
        console.log("Envoie requête connexion");
        axios.post('http://localhost:3000/api/auth/signin', { mail: data.mail, password: data.password })
           .then(res => {console.log("Connexion :", res.data.token); return res.data.token; })
           .catch(error => console.log(error))
    }

    fetchSave(saveId){
        console.log("Récupération d'une sauvegarde en cours");
        axios.post('http://localhost:3000/api/fetchSave', { id : saveId})
           .then(res => {return res.data})
           .then(res => {console.log("Sauvegarde :", res)})
           .catch(error => console.log(error))    
    }

    fetchAllSave(){
        axios('http://localhost:3000/api/fetchAllSaves', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET" 
        })
          .then(res => {return res.data})
          .then(res => {console.log(res)})
          .catch(error => console.log(error));
    }

    static save(data){
        const save = {userId: "6256777edb51ad1b88e30b4c", token: data, partyId : "haha", spiders : data};
        console.log("Envoie de la sauvegarde au serveur", save, data);

        axios.post('http://localhost:3000/api/save/saveGame', save, {
            headers: {
              'Authorization': data
            }
          })
            .then(function (response) { console.log(response);})
            .catch(function (error) {console.log(error);});        

          
    }
}

