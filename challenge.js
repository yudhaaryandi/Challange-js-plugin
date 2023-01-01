// soal1
let dataBuah=[
    {namaBuah:"Nanas", warna: "kuning", biji: "tidak ada", harga:9000},
    {namaBuah:"Jeruk", warna: "oranye", biji: "ada", harga:8000},
    {namaBuah:"Pisang", warna: "kuning", biji: "tidak ada", harga:5000},
    {namaBuah:"Semangka", warna: "merah", biji: " ada", harga:10000},
]

let bijiBuah = dataBuah.filter(buah =>buah.biji==="ada");
console.log(bijiBuah);
// soal 2
var arr1 = ['aku','Sayang','aku','sama','kamu']
arr1.splice (1,2,'sayang')
console.log(arr1.join(' '));
// soal 3
var KataPertama = "saya";
var KataKedua = "senang";
var KataKetiga = "belajar";
var KataKeempat = "javascript";
var res= KataPertama.concat[KataKedua,KataKetiga,KataKeempat];
console.log(KataPertama,KataKedua,KataKetiga,KataKeempat);
// soal 4
const word ='javaScript';
const second = 'is';
const third = 'awesome';
const OutputGabunganVariable = (`${word}, ${second}, ${third}`)
console.log(OutputGabunganVariable);
// soal 5
let hello ='hello';
let world ='world';
let output =(`${hello},${world}`);
console.log(Output);