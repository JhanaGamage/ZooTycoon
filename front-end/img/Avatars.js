const avatars = {
    'adultClient' : 'https://c1.thejournal.ie/media/2019/06/graham-27-752x501.png', // Humain étrange
    'spider' : 'http://pm1.narvii.com/7040/b350a5c26c0d8b6907bdae556267c7931dbc51fer1-797-598v2_uhq.jpg' // Araignée
}




export class Avatars {

    static getAvatars(){
       return avatars;
    }

    static getOneAvatar(key){
        return avatars[key];
    }
}