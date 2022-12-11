//Create By Zim Kedip
let kedip = document.getElementsByClassName ('nama')

console.log ("namaku :",  kedip)

kedip[0].style.color = "orange" ;
kedip[0].style.fontFamily = "calibri";
kedip[0].style.fontWeight = "700"
kedip[0].style.fontSize = "30px"
kedip[0].style.textAlign = "center"



setInterval (function(){
   kedip[0].style.color = "white" ;

   setTimeout(function(){

       kedip[0].style.color = "orange" ;
   },200)
},300)

//Tombol Calculator
let satu = document.getElementById('1')
let dua = document.getElementById('2')
let tiga = document.getElementById('3')
let empat = document.getElementById('4')
let lima= document.getElementById('5')
let enam = document.getElementById('6')
let tujuh = document.getElementById('7')
let delapan = document.getElementById('8')
let sembilan = document.getElementById('9')
let nol = document.getElementById('0')
//Operator
let ac = document.getElementById('ac')
let min = document.getElementById('min')
let hapus = document.getElementById('hapus')
let bagi = document.getElementById('bagi')
let kali = document.getElementById('kali')
let kurang = document.getElementById('kurang')
let titik = document.getElementById('titik')
let samadengan = document.getElementById('samadengan')
let layar = document.getElementById('layar')
// let tambah = document.getElementById('tambah')

let currentValue = 0 ; 
let simpandulu = 0 ;
let operator = '';

satu.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 1;
        layar.value = '1';
    }else{
        currentValue = currentValue + "1";
        layar.value = currentValue;
    }
})

dua.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 2;
        layar.value = '2';
    }else{
        currentValue = currentValue + "2";
        layar.value = currentValue;
    }
})

tiga.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 3;
        layar.value = '3';
    }else{
        currentValue = currentValue + "3";
        layar.value = currentValue;
    }
})

empat.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 4;
        layar.value = '4';
    }else{
        currentValue = currentValue + "4";
        layar.value = currentValue;
    }
})

lima.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 5;
        layar.value = '5';
    }else{
        currentValue = currentValue + "5";
        layar.value = currentValue;
    }
})

enam.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 6;
        layar.value = '6';
    }else{
        currentValue = currentValue + "6";
        layar.value = currentValue;
    }
})

tujuh.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 7;
        layar.value = '7';
    }else{
        currentValue = currentValue + "7";
        layar.value = currentValue;
    }
})

delapan.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 8;
        layar.value = '8';
    }else{
        currentValue = currentValue + "8";
        layar.value = currentValue;
    }
})

sembilan.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 9;
        layar.value = '9';
    }else{
        currentValue = currentValue + "9";
        layar.value = currentValue;
    }
})

nol.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = 0;
        layar.value = '0';
    }else{
        currentValue = currentValue + "0";
        layar.value = currentValue;
    }
})
min.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = '';
        layar.value = '-';
    }else{
        currentValue = currentValue + "-";
        layar.value = currentValue;
    }
})
titik.addEventListener('click', function() {
    if (currentValue === 0){
        currentValue = '';
        layar.value = '.';
    }else{
        currentValue = currentValue + ".";
        layar.value = currentValue;
    }
})

//Operator Nya
tambah.addEventListener('click',function() {
    simpandulu = currentValue;
    currentValue = 0;
    layar.value = 0 ;
    operator = 'tambah' ;
})
kurang.addEventListener('click',function() {
    simpandulu = currentValue;
    currentValue = 0;
    layar.value = 0 ;
    operator = 'kurang' ;
})
kali.addEventListener('click',function() {
    simpandulu = currentValue;
    currentValue = 0;
    layar.value = 0 ;
    operator = 'kali' ;
})
bagi.addEventListener('click',function() {
    simpandulu = currentValue;
    currentValue = 0;
    layar.value = 0 ;
    operator = 'bagi' ;
})


samadengan.addEventListener('click', function() {
    if(operator =='tambah'){
        let total = parseInt(simpandulu) + parseInt (currentValue);
        layar.value = total;
    }
    if(operator =='kurang'){
        let total = parseInt(simpandulu) - parseInt (currentValue);
        layar.value = total;
    }
    if(operator =='kali'){
        let total = parseInt(simpandulu) * parseInt (currentValue);
        layar.value = total;
    }
    if(operator =='bagi'){
        let total = parseInt(simpandulu) / parseInt (currentValue);
        layar.value = total;
    }
})

ac.addEventListener('click', function () {
    currentValue = '';
    layar.value = '';
})

hapus.addEventListener('click', function (){
    currentValue = currentValue.substring(0, currentValue.length - 1);
    layar.value = currentValue
})