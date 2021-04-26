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



blakfreeman
#8559

Abderrahim | Cactus 🌵 — 21/04/2021
loin de finir
AYUDA ME POR FAVOR SENIOR
Alexis 🌵🥉 — 21/04/2021
@Coding School 18  let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
Mohammed 🌵 — 21/04/2021
Rien que pcq y a pas mon nom je vais pas copier ce que ta envoyé
Dorian 🌵⛩ — 21/04/2021
Ouille
Anthony 🌵 — 21/04/2021
t as vue !!!
Issam 🌵 — 21/04/2021
Aucun respect
Dorian 🌵⛩ — 21/04/2021
Il a mit ses préférés
Dorian 🌵⛩ — 21/04/2021
:skull:
c'est vendredi nn ?
Mihai 🌵 — 21/04/2021
Pas de présentiel demain
COMMENT CA C'EST DEMAIN
Issam 🌵 — 21/04/2021
C'est demain les gars
Tania 🌵 — 21/04/2021
les garspas dans exercices svp :sob:
Alexis 🌵🥉 — 21/04/2021
oui demain présentielle
Mohammed 🌵 — 21/04/2021
MDDRR Go supprimer tous les msg @Coding School 18
Issam 🌵 — 21/04/2021
Yassin 🌵🏆 — 21/04/2021
@Alexis 🌵🥉  tu as oublié tout les arabes comme par hasard
Mihai 🌵 — 21/04/2021
^ Il y a Oussama dedans
Mohammed 🌵 — 21/04/2021
Oussama c'est un arabe gentil
Farhad 🌵 🥈 — 21/04/2021
go copier coller wakatime si vous voulez pas tout taper
Mohammed 🌵 — 21/04/2021
Les gars arretez d'ecrire dans ce channel mdr
Yassin 🌵🏆 — 21/04/2021
je vote pr une annulation du contract d'Alex
Abderrahim | Cactus 🌵 — 21/04/2021
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];

for (let i = 0; i < eleves.length; i++) {
    console.log("Bonjour " + eleves[i]);
}
Afficher plus
boucles_exo1_correction.js
1 Ko
-  # Exo 1 Boucles FOREACH
    ## - Creer une varaible de type array et inserez toutes les personnes de la classe
    ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

- # Exo 2 Boucle FOREACH
    - ## Créez un un array qui contient 5 éléments
Afficher plus
exo2_boucles-for.md
1 Ko
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
Junior 🌵 — 21/04/2021
fini
Abderrahim | Cactus 🌵 — 21/04/2021
presque fini
loind de finir
Dorian 🌵⛩ — 21/04/2021
Ayuda me por favor senior de la Cactus (pas pour moi)
Abderrahim | Cactus 🌵 — 21/04/2021
私を助けて
ewa
Dorian 🌵⛩ — 21/04/2021
wwwwww
Abderrahim | Cactus 🌵 — 21/04/2021
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];

eleves.forEach(e => {
    console.log("Bonjour " + e);
});
Afficher plus
boucles_exo2_correction.js
1 Ko
- ## Exo 1 
    ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
    ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

- ## Exo 2
    ## La même chose sauf qu'on incrémente par deux
Afficher plus
exo3_boucles-for.md
2 Ko
fini
presque fini
loin de finir
תעזור לי אדון הקקטוסים
Mohammed 🌵 — 21/04/2021
wtf

Junior 🌵 — 21/04/2021
@Abderrahim | Cactus 🌵 ayuda por favor
Abderrahim | Cactus 🌵 — 22/04/2021
condition_revision
- # EX1
    - ## Écrivez 3 nombre et affiche la somme des 2 premiers et la multiplication des 2 derniers. Afficher les résultats de la façon suivante :
    - ## Version 1 : 
        - ## Somme des 2 premiers = ? 
        - ## Multiplication des 2 derniers = ?
    - ## Version 2 : 
Afficher plus
condition_revision.md
2 Ko
methode_string_revision
1. Exo1
    - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
    - Déclenchez un deusieme prompt avec comme question "Entrez la lettre du mot que vouz voulez retirer" et stockez la réponse dans une variable
    - Affichez le mot sans la lettre choisie

2. Exo 2
Afficher plus
methode_string_revision.md
2 Ko
Abderrahim | Cactus 🌵 — 22/04/2021
variable_revision
# Variable 

## Introduction
### Exercice 1.1  
- Déclare une variable du nom de "firstVariale" qui a comme valeur ton prénom entre guillemets 
- affiche la via un console.log
Afficher plus
variable.md
5 Ko
methode_revision
# Méthodes string (prompt etc)

### Exercice 1
- Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi le 1er caractere du prénom dans une alert.
### Exercice 2
- Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi tout sauf le premier caractère du prénom dans une alert
Afficher plus
methode_revision.md
2 Ko
Abderrahim | Cactus 🌵 — 23/04/2021
//EXO1

let multiplicateur = 5;
for (let i = 1; i <= 9; i++) {
    console.log(multiplicateur + " x " + i + " = " + multiplicateur*i);
}
Afficher plus
exo3_boucles_correction.js
2 Ko
# Boucle (for, foreach)

## introduction
## Exercice 1
- répète via une boucle for 5 fois ton prénom dans un console.log
- affiche les tours de boucle dans un console.log
Afficher plus
Projet_Top_Secret.md
4 Ko
Alexis 🌵🥉 — 23/04/2021
finit
Abderrahim | Cactus 🌵 — Aujourd’hui à 12:54
//exo1
// for (let i = 1; i <= 5; i++) {
//     console.log("William");
//     console.log(i);
// }
Afficher plus
correction_boucles_souffrance_ALED.js
5 Ko
﻿
//exo1
// for (let i = 1; i <= 5; i++) {
//     console.log("William");
//     console.log(i);
// }

//exo2
// let tab = ["dorian", "aziz", "co-pilote de l'iceberg"];

// for (let i = 0; i < tab.length; i++) {
//     console.log("Bonjour " + tab[i]);
// }

//exercice1

// let nombre = prompt("Veuillez indiquer un nombre:");

// for (let i = 0; i <= nombre; i+=2) {
//     console.log(i);
// }

//Exercice 2
// let max = prompt("Veuillez indiquer un nombre:");
// for (let i = 0; i <= max; i++) {
//     if (i%2 == 0) {
//         console.log(`${i} est paire`);
//     }
// }

//Exercie 3
// let arr = ["Alexis", "Loic", "kkkkkk", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
// let paire = [];
// let impaire = [];

// arr.forEach((elemen, i) => {
//     if (i%2 == 0) {
//         console.log(elemen + " son index est paire");
//         paire.push(elemen);
//     } else {
//         console.log(elemen + " son index est impaire");
//         impaire.push(elemen);
//     }
// });

// console.log(paire , impaire);

//Exercice 4 partie 1
// let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam","Mihai", "Oussama", "Dorian", "Tania"];

// tab.forEach((element, i) => {
//     console.log(element);
//     console.log(element.charAt(0));
//     console.log(element.charAt(1));
//     console.log(element.charAt(1)+element);
//     if (i%2 == 0) {
//         console.log(element + " pair");
//     }
//     console.log("");
// });

//Exercice 4 partie 2
// let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];

// tab.forEach((e, i) => {
//     if (i%2 !== 0) {
//         console.log(e.toUpperCase());
//     } else {
//         console.log(e.charAt(0).toLowerCase() + e.substr(1));
//     }

//     if (i%2 === 0 && e.length > 4) {
//         console.log(e.charAt(0).toUpperCase());
//     }

//     if (e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") {
//         console.log(e);
//     }

//     if ((e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") && e.length > 5) {
//         console.log(e);
//     }
// });

//Exercice 4 partie 3
let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "edwaerd", "edwaerddaz"];
let boite = [];
tab.forEach((e, i) => {
    // if ((e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") && e.length < 5) {
    //     console.log(e.charAt(0).toUpperCase()+e.substr(1));
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 1 && e.length > 4) {
    //     console.log(e);
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 0 && e.length > 5) {
    //     console.log(e.charAt(0).toLowerCase()+e.charAt(1).toUpperCase()+ e.substring(2, e.length-1) + e.charAt(e.length-1).toUpperCase());
    // }
    if ((e.charAt(0).toLowerCase() == "k" || e.charAt(0).toLowerCase() == "m" ||e.charAt(0).toLowerCase() == "f" || e.charAt(0).toLowerCase() == "y" || e.charAt(0).toLowerCase() == "n" || e.charAt(0).toLowerCase() == "a" || e.charAt(0).toLowerCase() == "e" || e.charAt(0).toLowerCase() == "o") && i%2 == 1 && e.length < 7) {
        
        boite.push(e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase());
        console.log(boite);
    }
});
console.log(boite.join(""));