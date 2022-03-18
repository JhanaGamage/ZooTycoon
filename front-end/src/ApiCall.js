import axios from 'axios';



export class ApiCall {

    fetchSave(saveId){
        console.log("Récupération d'une sauvegarde en cours");
        axios.post('http://localhost:3000/fetchSave', { id : saveId})
           .then(res => {return res.data})
           .then(res => {console.log("Sauvegarde :", res)})
           .catch(error => console.log(error))    
    }

    fetchAllSave(){
        axios('http://localhost:3000/fetchAllSaves', { 
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

        const save = {userId: "hihi", partyId : "haha", spiders : game}
        console.log("Envoie de la sauvegarde au serveur", save, game)

        axios.post('http://localhost:3000/saveGame', save)
            .then(function (response) { console.log(response);})
            .catch(function (error) {console.log(error);});
        
    }

}