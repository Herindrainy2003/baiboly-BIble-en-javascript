url = "Json/baiboly.json"
let soratraMasina = document.querySelector('#soratraMasina')

fetch(url)
    .then(response =>{
        return response.json()
    })
   
    .then((data)=>{//data rensamble tout les data dans la json
      for(let i = 0 ; data.length > i ; i++){ //on va boucler et afficher un par un
        let chapitres = data[i].chapters //on stocke dans chapitres tous les chapitre de nos donne
    
        for(let j = 0 ; chapitres.length > j ; j++){
           let bookName = chapitres[j].bookName //cela affiche le nom de chaque  chapitres 
            let verset = chapitres[j].verses //on stocke dans verset tous les versets 
           
            for(let k = 0 ; verset.length > k ; k++){
                let index = verset[k].index //pour afficher le toko
                let content = verset[k].content //pour afficher le andiniky
             
            }
        }
     }

    
    })
     .catch((err)=>{console.log(err)})