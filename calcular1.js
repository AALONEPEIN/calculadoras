const txtn3= document.getElementById("n3")
const txtn4= document.getElementById("n4")
const respuesta1= document.getElementById("resp1")
const btncalcular1= document.getElementById("calcular1")
btncalcular1.addEventListener('click',calcular1)


function calcular1() {
    const op3 = parseFloat(txtn3.value);
    const op4 = parseFloat(txtn4.value);
    let resp1 = op4/((op3/100)**2);
    respuesta1.innerText = resp1;

}

const txtn5= document.getElementById("n5")
const txtn6= document.getElementById("n6")
const txtn7= document.getElementById("n7")
const respuesta2= document.getElementById("resp2")
const btncalcular2= document.getElementById("calcular2")
btncalcular2.addEventListener('click',calcular2)


function calcular2() {
    const op5 = parseFloat(txtn5.value);
    const op6 = parseFloat(txtn6.value);
    const op7 = parseFloat(txtn7.value);
    let resp2 = 0.049*(op6*2.2)*op5;
    respuesta2.innerText = resp2;

}
const txtn8= document.getElementById("n8")
const txtn9= document.getElementById("n9")
const txtn10= document.getElementById("n10")
const respuesta3= document.getElementById("resp3")
const btncalcular3= document.getElementById("calcular3")
btncalcular3.addEventListener('click',calcular3)


function calcular3() {
    const op8 = parseFloat(txtn8.value);
    const op9 = parseFloat(txtn9.value);
    const op10 = parseFloat(txtn10.value);
    let resp3 = 0.049*(op9*2.2)*op8;
    respuesta3.innerText = resp3;

}
const txtn11= document.getElementById("n11")
const txtn12= document.getElementById("n12")
const txtn13= document.getElementById("n13")
const respuesta4= document.getElementById("resp4")
const btncalcular4= document.getElementById("calcular4")
btncalcular4.addEventListener('click',calcular4)


function calcular4() {
    const op11 = parseFloat(txtn11.value);
    const op12 = parseFloat(txtn12.value);
    const op13 = parseFloat(txtn13.value);
    let resp4 = 0.049*(op11*2.2)*op12;
    respuesta4.innerText = resp4;

}

const txtn14= document.getElementById("n14")
const txtn15= document.getElementById("n15")
const txtn16= document.getElementById("n16")
const respuesta5= document.getElementById("resp5")
const btncalcular5= document.getElementById("calcular5")
btncalcular5.addEventListener('click',calcular5)


function calcular5() {
    const op14 = parseFloat(txtn14.value);
    const op15 = parseFloat(txtn15.value);
    const op16 = parseFloat(txtn16.value);
    let resp5 = 0.049*(op14*2.2)*op15;
    respuesta5.innerText = resp5;

}

const txtn17= document.getElementById("n17")
const txtn18= document.getElementById("n18")
const txtn19= document.getElementById("n19")
const respuesta6= document.getElementById("resp6")
const btncalcular6= document.getElementById("calcular6")
btncalcular6.addEventListener('click',calcular6)


function calcular6() {
    const op17 = parseFloat(txtn17.value);
    const op18 = parseFloat(txtn18.value);
    const op19 = parseFloat(txtn19.value);
    let resp6 = 0.049*(op17*2.2)*op18;
    respuesta6.innerText = resp6;

}
const txtn20= document.getElementById("n20")
const txtn21= document.getElementById("n21")
const txtn22= document.getElementById("n22")
const respuesta7= document.getElementById("resp7")
const btncalcular7= document.getElementById("calcular7")
btncalcular7.addEventListener('click',calcular7)


function calcular7() {
    const op20 = parseFloat(txtn20.value);
    const op21 = parseFloat(txtn21.value);
    const op22 = parseFloat(txtn22.value);
    let resp7 = 0.049*(op20*2.2)*op21;
    respuesta7.innerText = resp7;

}
