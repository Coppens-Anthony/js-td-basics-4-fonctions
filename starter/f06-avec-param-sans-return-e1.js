/*****************************
 * 020 - Fonctions - Préalable
 */

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

// 1°) Fonctions sans paramètre (pour comprendre l'utilité du paramètre) :

/* EXERCICE 1 : Plusieurs fonctions sans paramètre
1. a) Déclarez une fonction appelée double3 qui affiche dans la console 'Le double de 3 est  '.
   b) Appelez cette fonction.

// Imaginons à présent qu'on a besoin de calculer le double d'autres nombres 
// On a besoin de déclarer une fonction pour calculer le double de 10
// et puis de déclarer une AUTRE fonction pour calculer le double de 24
// et puis de déclarer une AUTRE fonction pour calculer le double de 128
// etc. et ainsi de suite à chaque fois qu'on veut calculer le double d'un nouveau nombre 
*/

/*
function double3() {
    const nbre1 = 3;
    console.log('Le double de 3 est ' + nbre1 * 2);
}

function double10() {
    const nbre2 = 10;
    console.log('Le double de 10 est ' + nbre2 * 2);
}

function double24() {
    const nbre3 = 24;
    console.log('Le double de 24 est ' + nbre3 * 2);
}

function double128() {
    const nbre4 = 128;
    console.log('Le double de 128 est ' + nbre4 * 2);
}

double3();
double10();
double24();
double128();*/

/*
// Si on regarde toutes ces fonctions, elles ont toutes un canevas commun,
// il y a une seule chose qui change : le nombre (3, 10, 24, 128). Tout le reste est identique.
// Dans ce cas, vous devez penser à créer une seule fonction qui prend un paramètre :
// le nombre dont on veut calculer le double.
*/


// 2°) Une fonction avec paramètre à la place de toutes celles-là :

/* EXERCICE 2 : Une seule fonction avec paramètre
1. a) Déclarez une fonction appelée double qui prend un paramètre appelé "nombre"
      et qui affiche dans la console 'Le double de [ce paramètre] est  '.
   b) Appelez cette fonction en passant différentes valeurs au paramètre
      pour obtenir : - le double de 3 ;
                     - le double de 10 ;
                     - le double de 24 ;
                     - le double de 128.
*/

function double(nombre){
    console.log(`Le double de ${nombre} est ` + nombre * 2 );
}
double(128);
