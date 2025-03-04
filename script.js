let meva = [
    "olma",
    "banan",
    "Gilos",
    "Shaftoli",
];

console.log(meva);

alert("boshlanishdagi array uzunligi: " +meva.length);
let javob=confirm("ichidan bitta element o'cirmoqchimiz");
if (javob == true) {
    meva.pop();
    alert("Array uzunligi: " + meva.length);
} else {
    alert("Array uzunligi: " + meva.length);
}

console.log(meva);
