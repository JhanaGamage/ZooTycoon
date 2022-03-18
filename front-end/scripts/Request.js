 
    
    
    FindSecurityInDb = (objId) =>
    {    
        fetch('https://localhost:3000/find/:id', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            params : {id : objId},
            method: "GET" 
        })
         .then(data => {return data.json()})
         .then(res => {console.log(res)})
         .catch(error => console.log(error))
     
    }

    //fetch('http://localhost:3000/saveGuardian', {
//    headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//  }, body: JSON.stringify(data), method: "post" })
//    .then(data => {return data.json()})
//    .then(res => {console.log(res)})
//    .catch(error => console.log(error))




// Récupération de toute la collection 'securities'
fetch('https://localhost:3000/findAll', { 
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }, 
    method: "GET" })
    .then(data => {return data.json()})
    .then(res => {console.log(res)})
    .catch(error => console.log(error))

//axios({
//    method : 'post',
//    url : 'https://localhost:3000/saveGuardian',
//    data: {
//        firstName: 'Finn',
//        lastName: 'Williams'
//      }
//}
//)    
