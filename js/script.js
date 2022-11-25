let hasil = 0;
document.getElementById("hasil").innerHTML = hasil;

function tambah(a,b){
    hasil = a + b;
    console.log(a);
    console.log(b);
    console.log("tambah " + hasil);

    return hasil;
}

function kurang(a,b){
    hasil = a - b;
    console.log("kurang" + hasil);

    return hasil;
}

function kali(a,b){
    hasil = a * b;
    console.log("kali" + hasil);

    return hasil;
}

function bagi(a,b){
    hasil = a / b;
    console.log("bagi" + hasil);

    return hasil;}

function modulus(a,b){
    hasil = a % b;
    console.log("modulus" + hasil);

    return hasil;}

function Choice(elem){

    if(elem.id == "tambah"){
        tambah(parseInt(document.getElementById("angkaPertama").value), parseInt(document.getElementById("angkaKedua").value));
        console.log("tambahIF");
        document.getElementById("hasil").innerHTML = hasil;
    } else if(elem.id == "kurang"){
        kurang(parseInt(document.getElementById("angkaPertama").value), parseInt(document.getElementById("angkaKedua").value));
        console.log("kurangIF");
        document.getElementById("hasil").innerHTML = hasil;
    } else if(elem.id == "kali"){
        kali(parseInt(document.getElementById("angkaPertama").value), parseInt(document.getElementById("angkaKedua").value));
        console.log("kaliIF");
        document.getElementById("hasil").innerHTML = hasil;
    } else if(elem.id == "bagi"){
        bagi(parseInt(document.getElementById("angkaPertama").value), parseInt(document.getElementById("angkaKedua").value));
        console.log("bagiIF");
        document.getElementById("hasil").innerHTML = hasil;
    } else if(elem.id == "modulus"){
        modulus(parseInt(document.getElementById("angkaPertama").value), parseInt(document.getElementById("angkaKedua").value));
        console.log("modulusIF");
        document.getElementById("hasil").innerHTML = hasil;
    }

}
