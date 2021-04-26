// let prenom = 'anthony'; 
 
// let array = [];

// for (let i = 1; i <= 5; i++) {
// array.push(prenom);
// }

// console.log(array);


// let classTab = ['anhonty', 'junior','kevin'];

// classTab.forEach(e => {
//     console.log(e + ' '+ 'bonjour')
//      });


//1
// let x = "kev";
// for (let i= 0; i< 5; i++) {
//    console.log(x);

// }
//2
// let x = ["Kev", "andy", "willy"];
// for (let i = 0; i < x.length; i++) {
//     console.log("Bonjour " + x[i]);
// }
//Mélange
//1
// let x = prompt('votre chiffre');
// for (let i = 0  ;i <= x; i=i+2) {
//     console.log(i);

// }
//2
// let x = prompt('votre chiffre');
// for (let i = 0  ;i <= x; i=i+2) {
// switch (x%2) {
//     case 0:
//         console.log(`Le nombre ${x} est paire ${i}`);

//         break;

//     default:
// console.log(`Le nombre ${x} est impaire`);
//         break;
// }

// 3
// let x = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", " Kevin", " Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
// for (let i = 0; i < x.length; i++) {
//     if(x.indexOf(i) % 2 ==0){
//         console.log(x[i]);
//     }else{
//         console.log(x[i]);
//     }
// }
// x.forEach(e => {
//     if (x.indexOf(e) % 2 ==0) {
//         console.log(e);
//     }
//     else{
//         console.log(e);
//     }
// });
//exo4
//1
// let x = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];
// x.forEach(e => {
//     console.log(e);
//     console.log(`${e.charAt(e)}`);
//     console.log(`${e.charAt(1)}`);
//     console.log(` ${e.charAt(1)} ${e}`);
//     if (x.indexOf(e) % 2 == 0) {
//         console.log(e);
//     } else {
//         console.log(e);
//     }
// });
//2
// let x = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];
// x.forEach(e => {
//     if (x.indexOf(e) % 2 !== 0) {
//         console.log(e.toUpperCase());
//         if (e.length > 4) {
//             console.log(e);
//         }
//     } else {
//         console.log(e.toLowerCase());
//         if (e.length > 4) {
//             console.log(`${e.charAt(e)}`);
//         }
//     }
//     if (e.charAt[0]=="a" || e.charAt[0]=="e" || e.charAt[0]=="m" || e.charAt[0]=="f" || e.charAt[0]=="y"||e.charAt[0]=="n" ) {
//         if(e.length>5){
//             console.log(e);
//         }
//         console.log(e);
//     }
// });
//3
let x = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];
x.forEach(e => {
    if (e.charAt[0] == "a" || e.charAt[0] == "e" || e.charAt[0] == "m" || e.charAt[0] == "f" || e.charAt[0] == "y" || e.charAt[0] == "n") {
        if (e.length > 5) {
            console.log(e);
        }
        console.log(e);
    }

});

