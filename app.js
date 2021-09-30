const form = document.querySelector('form');
let reponses_checked = [];
const reponses_true = ["b","b","a","b","a"];
 let verifTab = [];

// console.log(form)
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // var salah = document.querySelector('input[name="q1"]:checked').value;
    // console.log(salah)
    for (i=1 ; i<6 ; i++)  {
        var salah = document.querySelector(`input[name="q${i}"]:checked`).value;
        // console.log(salah)
        reponses_checked.push(salah)
    }    
    // console.log(reponses_checked)
    verif(reponses_checked, reponses_true);
    reponses_checked = [];
})
function verif(a,b){
    for (var i = 0 ; i < 5 ; i++) {
        if (a[i] === b[i]) {
            verifTab.push(true);
        }else{
            verifTab.push(false);
        }
    }
    // console.log(verifTab)
    nbrFautes(verifTab)
    verifTab = [];
     
}
var conteur = 0;
function nbrFautes (a){
    for (i=0; i< a.length ; i++){
        if (a[i] == true){
            conteur++
            if(conteur==5){
                document.querySelector('.toto').innerText=" 5/5";
            }else{
                document.querySelector('.toto').innerText=" tente encore";
            }
         
        }else{
            null
        }
    }
   console.log(conteur)    
   conteur=0;
  
}
