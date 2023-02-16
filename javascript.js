// 1)Prompdan daxil olan ədədin faktorialini tapin

//  var Eded = prompt('Hansi ededin faktorialin tapmag istisiz :')
//  var i
//  var hasil = 1
//  for (i = Eded; i > 1 ; i--){
//      hasil *=i

//  }console.log(Eded, '! = ', hasil)

// 2)Arrayin içərisindəkiləri kiçikdən böyüyə göstərin

// const array = [ 7,24,97,35,-5,12,-86,235,578]
// function ardicilig(arr){
//   let swaped
//   let n
//   do{swaped=false
//     for(let i = 0; i < arr.length; i++){
//   if(arr[i]>arr[i+1]){
//   n=arr[i]
//   arr[i]=arr[i+1]
//   arr[i+1]=n
//   swaped=true
//   }
//   }
//   }while(swaped)
//    return arr
//   }
// console.log(ardicilig(array))

// 3)Arraydaki sadə ədədləri göstərin

// var arr = [12,44,11,19,65,7]

// for(let k = 0;k<=arr.length-1;k++){
//   var count = 0
//   for(let i = 2;i<arr[k];i++){
    
//     if(arr[k]%i==0){
//       count ++
   
     
//     }
//   }
//    if(count==0){
//      console.log('Araydeki sade eded',arr[k])
//    }
// }

// 4)Stringdə olan saitleri ve onlarin sayini tapin

// var a 
//   function display (str){
//     let count = 0
//      a = ['a','e','o','i','u']
//     for(let x of str.toLowerCase()){
//       if(a.includes(x)){
//         count +=1
//         console.log(x)
//       }
//     }
      
//       console.log('Saitlerin sayi',count)
         
//   }
// display('Amil kenan anar ruslAn')
// 5)Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin

// var myArray = [];
// let i = 0
// function maxEded(array){
//   let n = prompt('Masive negeder eded olsun ?')
// while (i < n ){
//   let a = prompt('eded');
//   array.push(a)
//   i++
// }
// console.log(array)
// var m = Math.max(...array);
// console.log('Masivde en boyuk eded: ',m)
// }
// maxEded(myArray)

// 6)Verilən cümlədə bütün sözlerin baş hərfini böyüdün

// var sentence = 'salam menim adim anardir'
// var arr = sentence.split(' ')
// const upper = (word) => {
//     console.log (word.charAt(0).toUpperCase() + word.slice(1))
// }

// arr.map(x=> upper(x))

// 7)Verilən ədəddən sonraki ilk sade ədədi tapin

// let a = +prompt('Eded dahil ed')
// let count = 0
// console.log('input :',a)
// while(count !== 2){
//     a = a +1

//     for(let i = 1;i<=a;i++){
//     let reminde = a %i    
//     if (reminde==0){
//         count+=1
//     }
// }
// if(count < 3){
//     console.log('inputan sonraki sade eded :',a)
// }else{
//  count = 0
// }
// }
// 8)Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin

// let n = prompt('n qiymetin dahil edin :')
// let j = 0
// var arr = []
//   let i = 0
// let count = 0
// while(j < n){
//   let input = prompt('masive eded dahil edin')
//   arr.push(input)
//   j++
// }
// while(i < arr.length){
//   let reminde = arr[i]%10  
//   if(+reminde == 9 ){
//     count +=1
//     i++
    
//   }
//   else{
//     i++
//   }
// }
// console.log(arr)
// console.log('Sonu 9-la biten elementlerin sayi',count)
// if(count >=1){
//   console.log('arayda 9 la biten eded var',true)
// }else{
//   console.log('arayda 9 la biten eded var',false)
// }
// 9)Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin

// var arr = []
// let say1 = 0;
// let j =0
// function cut(array){
//   let n = prompt('Masiv nece ededten ibaret olunsun :')
//   while(j < n){
//   let input = prompt('eded dahil edin')
//   array.push(input)
//   j++
// }

// for(let i = 0; i <= array.length -1; i++){
//  let reminde = array[i] % 2
//   if (reminde == 0){
//     say1 +=1
//   }
// }
//   console.log(array)
//     console.log('masivdeki cut ededlerin sayi :',say1)
// if(say1>=1){
//   console.log('Cut elemet var :',true)
// }else{
// console.log('Cut elemet var :',false)
// }
// }

// cut(arr)
// 10)Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin ( bu suali daha kisa yazmag olardi static 
// regem vererek elemisdim size gostermisdim Amil Melim ama indi bu sefer dedim randomnan ozu secsin bele 
// daha geseng gorsenir)

// var a =Math.floor((Math.random()+1)*10)
// if(a == 10){
//   console.log(a)
// }
// var sam = 0
// function randomindelejent(min , max){
//   let ran = min  + Math.floor(Math.random() * (1 + max - min))
//   sam+=ran
  
//   if(ran==sam) return sam

//   randomindelejent(0 , 9)
// }
// var y = randomindelejent(0 , 9)
// var arr2 = [0,1,2,3,4,5,6,7,8,9]
//  arr2.splice(y,1)
// var arr = [0,1,2,3,4,5,6,7,8,9]
// console.log('original',arr)
// console.log('update',arr2)



// function check (array1,array2){
//   array1.map(x => {
//     let different = true
//     array2.map(k => {
//       if (x == k) {
//         different = false
//       }
//     })
//     if (different) {
//       console.log(`${x} Ededi cixardirmisdir`,x)
//     }
//   })
// }
//         check(arr,arr2)
// 11)Daxil olunan  stiringin ilk hərfini böyüyə çevir

// let str = ''
// str = prompt('soz dahil ele')
// str = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(str)

// 12)Arrayda forla ədədləri 5 vahid artirmaq
// var arr = [12,34,65,23,97,46]
// for(let x of arr){
   
//   console.log(`${x} + 5  =>`,x + 5)
//   var c = x + 5
//   arr = arr.concat(c)


// }
// console.log('Sonuncu array',arr)
// 13)n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

// let a = prompt('neceyecen gedsin')
// console.log('n -',a)
// var arr = []
// for(let i = 1 ; i <= a; ++i){
// arr =  arr.concat(i)
//   let spisok = arr.join(', ')
//   console.log(spisok)
// }

// 14) a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *


// let top = ''
// let orta = ''
// const a = prompt('uzunlugun neceye beraber olsun:')
// const b = prompt('eni neceye beraber olsun :')
// let k = 0

// for(var i = 0; i<a;i++){
//   top += '*'+ ' '
// }

//   for(var j = 0; j <2*a - 3 ; j++){
//   orta += ' '
// }
// console.log(top)
// while(k<b-2 ){
//   console.log('*'+orta + '*')
//   k++
// }
// console.log(top)
// 15) Fibonacci sequence-ni recursion ile edin 

// function fibonacci(num) {
    //   if (num <= 1) return 1;
    
    //   return fibonacci(num - 1) + fibonacci(num - 2);
    // }
    
    // console.log(fibonacci(5))






_______________________________
// 16) ES6 ve ondan sonrakilar nədir?
// Javascript 1995 ilde 10 gune  yaradilib ve 2006 ilden javascripte cox boyuk yeniliyler elave olunuv onagerede ES6+
//  deyilir ola bilerki bizim bizim yazdigimiz ES bezi brauzerlerde acmiya biler yani desktelenmiye biler onagerede 
//  biz Bubldan istvade eleyirik yani bu bizim ESkriptimizi ES5 cevirir sag terefde bizim yazdigimiz kod gosterir sol 
//  terefdese cevirilmis kodu gosterir ES5
//  cevirir cunki ES5 her brauzer terefden testeklenir


// 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
// Closure funksiyası adi function baskacur yazilisidir misal :
// adi function bele yazilir : function parametr (argument){}
// ama Closure funksiyası bele yazilir : const parametr = (argument) =>{}
// const yerine let ve varda isletmek olar ama const daha yahsidi cunki sabitti


// 18)Hoisting dedikdə nə başa düşürsüz?
// misal: var let const bularin ucunen var holstingdi ama let ve const xeyr bes hosting nedi
// a = 10
// console.log(a)
// var a 
// bu misal holstingdi yani baxir parametr a ya argumenti 10 du ama a dikler edilmiyib ahtarir a yaradilibmi? asagda 
// tapir ve onu en yuhara getirir bu ancag varda istiyir ama let ve const yoxlasog eror vericek bide elave eleyim 
// holsting ancag parametri aparir yani argumetri aparmir 

// 19)HOF nəyə deyilir? ve 20)Callback nədir? cavablari bir yerde
// Misalcun :
// 1)function Callback(){
    
// }
// 2)function HOF(Callback){

// }
// 3)HOF(Callback())

// yani bir funksiyanin argumenti bir baska funksiya gebul edirse onda o funksiya HOF adlanir ama argumentte gebul ettiyimiz
// funcsiyasa Callback adlanir misalda gosterdiyimki 3) nomreyle isaredeyim yerde HOF adta functiyamin icindeki argument 
// 1) isaredeyiyim funksiyadi onagerede HOF adlanir ama icindeki argumentse Callback adlanir



// 21)Data types neçə dənədir və hansılardır?
// data types 3 cur olur : primitiv , nunprimitiv , reverens
// primitiv types aitti : 
//                         1. String
//                         2. Number
//                         3. Bigint
//                         4. Boolean
//                         5. Undefined
//                         6. Null
//                         7. Symbol

// reverens :              1 Object


// reverens tipi bularda istvade olunur:

//  An object
//  An array
//  A date
// 22)Let ve const fərqi nələrdir?
// let ve const ikside yaradir yani dikler edir ama olar fergi ondadiki let nen yaradiran parametr deyismek isteyirsizse alinicag ama
// const sabit olduguna gore onu deyismek olmur deyismeye calissag eror vericek 
// misal :
// // let a = 10
// // a+=5
// // console.log(a)

// // const b = 10
// // b+=5
// // console.log(b)

// 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?
// Recursion funksiya yani functiyanin oz ozunu cagirmasina deyilir yox if isletmeden recursiyani yazmag olmaz
// cunki rekursiyada bir son gostermesen sonsuz dovure giricek onagere if elseyla sonu bitis yerini gostermeriyuy
// misal :
// function fibonacci(num) {
//     if (num <= 1) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
  
//   console.log(fibonacci(5))
//   bu misalda eger biz ifle serti vermesek bu sonsuz gedicek 

// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin

// metod setTimeout() isdedilirki misalcun hansisa functiyani gosteriler vahtan soram ccagirsin neecese milliseconds
// 1 saniye = 1000 milliseconds
// setTimeout() metodu O(1) yani bidefe islenir yox eger biz onu bir necedefe isletmet Istesey 
// setTimeout() bu metodun yerine setInterval() bunu isledin eni isi gorur sadece bu mir necedefe tekralanir
// setTimeout(function, milliseconds, param1, param2, ...) bele yazilir function yerine bildiyimizkimi
// bir function vericey milliseconds yerine nece milliseconds islemeye baslasin param1 hiseyese uzunlugu
// eni ve sayr kimi parametrer vere bilerik
// misal:
// function openWin() {
//     const myWindow = window.open("", "", "width=200, height=100");
//     setTimeout(function() {myWindow.close()}, 3000);
//   }
//   openWin()functiya yarattig myWindow adti parametr yarattig argumentler verdik ve setTimeout()
//   la biz birinci functiyani cagirdig ve dediki bu functiya 3000 milisecun islesin
  


// 25)Hansı method arrayı string’e çevirir?
// join('')
// string Array ceviren 
// split('')