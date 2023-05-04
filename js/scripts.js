
function openMenuMobil(){
    document.querySelector(".menu").classList.add("open");
}
function closeMenuMobil(){
    document.querySelector(".menu").classList.remove("open");
}

let coursListView = document.querySelector('.cours-list');

if(coursListView){
fetch('js/cours.json')
    .then(reponse=>reponse.json())
    .then((data)=>{
        console.log(data)
        let courses=data;

        for(const cours of courses){
            coursListView.innerHTML+= `<div class="cours-item"> 
            <img src="images/${cours.Image}" alt="Photo"> 
            <h2>${cours.Titre}</h2> 
            <p>${cours.Description}</p>
            <p>${cours.VolumeHoraire}</p> 
            </div>
            `;
        }
    });
}

let membreListView = document.querySelector('.list-membre');

if(membreListView){
fetch('js/membres.json')
    .then(rep=>rep.json())
    .then((donnee)=>{
        console.log(donnee)
        let membres=donnee;

        for(const membre of membres){
            membreListView.innerHTML+= 
            `<div class="membre-item"> 
            <img src="images/${membre.Photo}" alt="Photo"> 
            <h3>${membre.NomComplet}</h3> 
            </div>
            `;
        }
    });

}
    
