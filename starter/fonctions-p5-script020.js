/*****************************
 * 020 - Fonctions
 */

// 1. Fonction avec un paramètre et un return

/*
1. Déclarez la fonction calculateAge prenant le paramètre birthYear.
2. À l'intérieur de la fonction, calculez l'âge de la personne en soustrayant birthYear de l'année courante.
3. Utilisez un return pour renvoyer l'âge calculé.
*/

const year = new Date();
console.log(year.getFullYear());

function calculateAge(birthYear) {
    const age = year.getFullYear() - birthYear;
    return age;
}

/*
Utilisez la fonction calculateAge que vous venez de créer pour calculer
	- l'âge de John (né en 1990)
	- l'âge de Mike (né en 1948)
	- l'âge de Jane (née en 1969)
4. Affichez ces âges dans la console.
*/
console.log('John a ' + calculateAge(1990) + ' ans');
console.log('Mike a ' + calculateAge(1948) + ' ans');
console.log('Jane a ' + calculateAge(1969) + ' ans');


// 2. Fonction avec deux paramètres et un return

/*
1. Déclarez la fonction giveYearsUntilRetirement prenant les paramètres
	- year (pour l'année de naissance de la personne)
	- firstName (pour le prénom de la personne)
2. À l'intérieur de la fonction, calculez l'âge de la personne en utilisant la fonction calculateAge que vous venez de créer.
3. Calculez le nombre d'années qui restent jusqu'à la pension (65 ans) et stockez-le dans une variable retirement.
4. Si ce nombre est positif, affichez "… prendra sa pension dans … ans",
	 sinon affichez "… est déjà pensionné(e)".
5. Utilisez ensuite cette fonction pour calculer dans combien d'années seront pensionnés
	- John (né en 1990)
	- Mike (né en 1948)
	- Jane (née en 1969)
*/

function giveYearsUntilRetirment(year, prenom) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(prenom + ' prendra sa pension dans ' + retirement + ' ans');
    } else {
        console.log(prenom + ' est déjà pensionné(e)');
    }
}

giveYearsUntilRetirment(1990, 'John');
giveYearsUntilRetirment(1948, 'Mike');
giveYearsUntilRetirment(1969, 'Jane');





