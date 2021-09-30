const form = document.querySelector('form');
let reponses_checked = [];
const reponses_true = ["b","b","a","b","a"];
 let verifTab = [];
 const aideResultat = document.querySelector('.aide');

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
function nbrFautes (para){
    for (i=0; i< para.length ; i++){
        if (para[i] == true){
            conteur++;
        }else{
            null
        }
        switch(conteur){
            case 0:
                document.querySelector('.toto').innerText=" 0/5";
                aideResultat.innerText = `👎 pas de chance  ! 👎`
                break;
            case 1:
                document.querySelector('.toto').innerText=" 1/5";
                aideResultat.innerText = `👎 Peux mieux faire ! 👎`
                break;
            case 2:
                document.querySelector('.toto').innerText=" 2/5";
                aideResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
                break;
            case 3:
                document.querySelector('.toto').innerText=" 3/5";
                aideResultat.innerText = `✨ Encore un effort ... 👀`
                break;
            case 4:
                document.querySelector('.toto').innerText=" 4/5";
                aideResultat.innerText = `✨ Vous y êtes presque ! ✨`
                break;
            case 5:
                document.querySelector('.toto').innerText=" 5/5";
                aideResultat.innerText = `✔️ Bravo, c'est etait sans faute ! ✔️`
                break;
                default:
                    'Wops, cas innatendu.'; 
        }
    }
   conteur=0; 
}
