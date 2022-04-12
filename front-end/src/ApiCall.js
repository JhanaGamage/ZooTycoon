import axios from 'axios';
import React from 'react';

// All api request
export default class ApiCall extends React.Component{
    static signUp(data){
        console.log("Envoi requête d'incription");
        axios.post('http://localhost:3000/api/auth/signUp', { name: data.name, mail: data.mail, password: data.password })
           .then(res => {return res.data})
           .then(res => {console.log("Inscription :", res)})
           .catch(error => console.log(error))
    }

     signIn(data){
        console.log("Récupération d'une sauvegarde en cours");
        axios.post('http://localhost:3000/api/signIn', { mail: data.mail, password: data.password })
           .then(res => {return res.data})
           .then(res => {console.log("Inscription :", res)})
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

      save(game){
        const save = {userId: "hihi", partyId : "haha", spiders : game};
        console.log("Envoie de la sauvegarde au serveur", save, game);

        axios.post('http://localhost:3000/api/save/saveGame', save)
            .then(function (response) { console.log(response);})
            .catch(function (error) {console.log(error);});        
    }
}

