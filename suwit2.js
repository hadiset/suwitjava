// const hasil = document.getElementById('hasil');
// const pHasil = hasil.querySelector('p');
// const gambarBawah = document.querySelectorAll('.gambarBawah');
// const gambarAtas = document.querySelector('.gambarAtas');


// gambarBawah.forEach(function(e){
//     e.addEventListener('click', function(){
//         const scissor = document.getElementById('scissor');
//         const stone = document.getElementById('stone');
//         const paper = document.getElementById('paper');
//         let x = Math.round(Math.random()*10);
//         let y = '';
//         console.log(x);

//         if(x < 4){
//             gambarAtas.src = 'img/stone.png';            
//         }else if(4 <= x && x <= 6 ){
//             gambarAtas.src = 'img/scissor.png';            
//         }else if(7 <= x && x <= 10 ){
//             gambarAtas.src = 'img/paper.png';            
//         }        

//         if(e.id == 'scissor'){            
//             if(x < 4){
//                 pHasil.className = 'kalah';
//             }else if(4 <= x && x <= 6 ){
//                 pHasil.className = 'seri';
//             }else if(7 <= x && x <= 10 ){
//                 pHasil.className = 'menang';            
//             }
//         }else if(e.id == 'stone'){
//             if(x < 4){
//                 pHasil.className = 'seri';
//             }else if(4 <= x && x <= 6 ){
//                 pHasil.className = 'menang';
//             }else if(7 <= x && x <= 10 ){
//                 pHasil.className = 'kalah';            
//             }
//         }else{
//             if(x < 4){
//                 pHasil.className = 'menang';
//             }else if(4 <= x && x <= 6 ){
//                 pHasil.className = 'kalah';
//             }else if(7 <= x && x <= 10 ){
//                 pHasil.className = 'seri';            
//             }
//         }
//     })
// })


//buat fungsi untuk hasil komputer
function hasilKom(){
    // mengenerate nilai random
    let r = Math.random();
    // menentukan nilai suwit
    if(r < 0.3) return "stone";
    else if(0.3 <= r && r <= 0.6) return "scissor";
    else return "paper";
}

//buat fungsi untuk rule
function ruleGame(p,x){
    if(p == x) return 'Seri';
    else if(p == 'stone') return (x == 'scissor') ? 'Menang' : 'Kalah';
    else if(p == 'scissor') return (x == 'stone') ? 'Kalah' : 'Menang';    
    else if(p == 'paper') return (x == 'stone') ? 'Menang' : 'Kalah';        
}

function putar(){
    const gambarKom = document.querySelector('.gambarKom');
    const gambar = ['scissor', 'stone', 'paper'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        gambarKom.setAttribute('src', 'img/'+ gambar[i++] + '.png');
        if(i == gambar.length ) i = 0;
    }, 100)
}

function getScore(x){
    const s = x;
    let c = 0;
    let m = 0;
    if(s == 'Menang'){
        m++;

        return m;
    }else if(s == 'Kalah'){
        c++;

        return c;
    }
}

function getScore(x){
    const scoreC = document.getElementById('scoreC');
    const scoreM = document.getElementById('scoreM');
    let c = parseInt(scoreC.innerText);
    let m = parseInt(scoreM.innerText);

    // if(x == 'Menang'){
    //     m += 1;

    //     return scoreM.innerHTML = m;
    // }else if(x == 'Kalah'){
    //     c += 1;

    //     return scoreC.innerHTML = c;
    // }

    if (x == 'Menang') {return scoreM.innerHTML = (m+=1)}
    else if (x == 'Kalah') {return scoreC.innerHTML = (c+=1)}

}

function resetScore(){
    const scoreC = document.getElementById('scoreC');
    const scoreM = document.getElementById('scoreM');
    scoreC.innerHTML = 0;
    scoreM.innerHTML = 0;
}

//buat fungsi hasil
const player = document.querySelectorAll('li img');
player.forEach(function(e){
    e.addEventListener('click', function(){
        let k = hasilKom();
        let p = e.className;
        let h = ruleGame(p,k);        

        putar();
        

        setTimeout(function(){
            const hasil = document.getElementById('hasil');
            hasil.innerHTML = h;

            const gambarKom = document.querySelector('.gambarKom');
            gambarKom.setAttribute('src', 'img/'+ k + '.png');
            getScore(h);
        }, 1000)
    })
})

document.getElementById('resetScore').addEventListener('click',function(){
    resetScore();
})

