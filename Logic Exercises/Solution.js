function addition(a, b) {
  /*
    let sum = a + b;
    return sum;
    */
}
//console.log(addition(6,7));

function addition(num) {
  /*
    return num + 1;
    */
}
//console.log(addition(6));

function convert(minutes) {
  /*
    secs = minutes * 60;
    return secs;
    */
}
//console.log(convert(60));

function addUp(num) {
  /*
    let suma = 0;
    for (let i=1;i<=num;i++){
        suma += i;
    }
    return suma;
    */
}
//console.log(addUp(4));

function triArea(base, height) {
  /*
    return area = (base * height) / 2;
    */
}
//console.log(triArea(7,4));

function nextEdge(side1, side2) {
  /*
	return (side1 + side2) - 1;
    */
}
//console.log(nextEdge(9,2));

function getFirstValue(arr) {
  /*
	return firstElm = arr[0];
    */
}

function points(twoPointers, threePointers) {
  /*
	let totalPoints = (twoPointers * 2) + (threePointers * 3);
    return totalPoints;
    */
}

function lessThanOrEqualToZero(num) {
  /*
	if (num <= 0) {
		return true;
	} else {
		return false;
	}
    */
}

function giveMeSomething(a) {
  /*
	let word = "something" + " " + a;
	return word;
    */
}

function lessThan100(a, b) {
  /*
	var total = a + b;
    if (total < 100) {
        return true;
    } else {
        return false;
    }
    */
}

//console.log(lessThan100(50,50));

function minMax(arr) {
  /*
    let minimum = arr[0];
    let maximum = arr[0];
    for (let i = 1; i < arr.length ; i++){
        if (arr[i] < minimum) {
            minimum = arr[i];
        } else if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return [minimum,maximum];
    */
}
//console.log(minMax([2,7,8,9,10, 999]));

function sumOfCubes(arr) {
  /*
    sumOf = 0;
    for (let i=0; i < arr.length ; i++){
        let cubeNum = arr[i] ** 3;
        sumOf = sumOf + cubeNum;
    }
    return sumOf;
    */
}
//console.log(sumOfCubes([1,5,9]));

function repetition(txt, n) {
  /*
    finalText = '';
    for (let i = 0; i < n; i++) {
        finalText = finalText + txt;
    }
    return finalText;
    */
}
//console.log(repetition("good",5));

function calcularEdadMayor(a) {
  /*
    if (a >= 18) {
        return console.log("Es mayor de edad");
    } else {
        return console.log("No es mayor de edad");
    }
    */
}
//console.log(calcularEdadMayor(19));

function factorial(int) {
  /*let sum = 1;
    for (let i = int ; i > 0 ; i--) {
        sum = sum * i;
        }
        return sum;
        */
}
//console.log(factorial(13));

function highestDigit(number) {
  /* var toString = number.toString();
    var highNum = 0;
  for (let i = 0; i < toString.length ; i++ ){
    if (toString[i] > highNum){
        highNum = toString[i];
    }
  }
  return parseInt(highNum);
  */
}
//console.log(highestDigit(23859));

function matchHouses(step) {
  /*
    let fosforos = 0;
    let n = step - 1;
    if (step == 1) {
        return fosforos = step * 6;
    } else {
        return fosforos = (step * 6) - n;
    }
    */
}
//console.log(matchHouses(87));

function findLargestNum(arr) {
  /*
    maxNums = [];
    for (let i = 0; i < arr.length ; i++){
        let numInArr = 0;
        for (let j = 0; j < arr[i].length; j ++){
            if (arr[i][j] > numInArr) {
                numInArr = arr[i][j];
            }      
        }
        maxNums.push(numInArr);
    }
    return maxNums;
    */
}
//console.log(findLargestNum([[14,24,700],[67,12],[1000,10,599]]));

function invertirPalabra(palabra) {
  /*
    let invertida = '';
    for (let i = palabra.length - 1; i >= 0 ; i--) {
        invertida = palabra[i] + invertida;
    }
    return invertida;
    */
}
//console.log(invertirPalabra("holacomoestas"));

function invertirArray(arr) {
  /*
    let arrInv = arr.split(" ");
    let newArr = [];
    for (i = arrInv.length - 1; i >=0 ; i--) {
        newArr.push(arrInv[i]);
    }
    return newArr;
    */
}
//console.log(invertirArray('Hola Carlangitas como estas?'));

function countVowels(str) {
  /*
    let cont = 0;
    for (let i=0;i<str.length;i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            cont++;
        }
    }
    return "La cantidad de vocales son: " + cont;
    */
}
//console.log(countVowels("Boludoski y la bella"));

function timeForMilkAndCookies(date) {
  /*
    let dia = date.getDate();
    let mes = date.getMonth();

    if (mes === 11 && dia === 24) {
        return true;
    } else {
        return "Its not time for milk and cookies :("
    }
    */
}
//console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
//console.log(timeForMilkAndCookies(new Date(2023, 0, 23)));

function numberToArrayOfDigits(int) {
  /*
    let toStr = int.toString();
    let toArr = [];
    for (let i=0;i<toStr.length;i++){
        toArr.push(parseInt(toStr[i]));
    }
    return toArr;
    */
}
//console.log(numberToArrayOfDigits(640023));

function getOnlyEvens(nums) {
  /*
    let newArr = [];
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] % 2 == 0) {
            newArr.push(nums[i]);
        }
    }
    return newArr;
    */
}
//console.log(getOnlyEvens([6,4,88,0,93,7,1,2,5]));

function sumOfDigits(int) {
  /*
   let toStr = int.toString();
   let total = 0;
   for (let i = 0 ; i < toStr.length ; i++) {
        total = total + parseInt(toStr[i]);
   }
   return total;
   */
}
//console.log(sumOfDigits(6684));

function amplify(num) {
  /*
    let arr = [];
    let aux = 0;

    for (let i = 1; i <= num ; i++){

        if (i % 4 == 0){
            aux = i * 10;
            arr.push(aux);
        } else {
            arr.push(i);
        }
    }
    return arr;
    */
}
//console.log(amplify(14));

function potatoes(str) {
  /*
    let palabra = str.match(/potato/ig);
    return palabra ? palabra.length : 0;
    */
}
//console.log(potatoes("potatopotatoapppllepotato"));

function sumAll(arr) {
  /*
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let tot = 0;
    for (let i = min ; i <= max ; i++) {
      tot = tot + i;
    }
    return tot;
    */
}
//console.log(sumAll([1, 4]));

function cardHide(card) {}

function cardHide(card) {
  /* primero que siempre me olvido
    let inStringPlz = card.toString();
    // primero parte todo, menos los ultimos 4 y luego reemplaza todo por *
	let hidden = inStringPlz.slice(0, -4).replace(/./g, "*");
    // toma los ultimos 4
    let lastFour = inStringPlz.slice(-4);
    let theCard= hidden + lastFour;
    return theCard;
    */
}
//console.log(cardHide(1231321231231312));

function numeroPrimoSum(n) {
  /*
    let suma = 0;
    if (n > 0) {
      for (let i = 1; i < n; i++) {
        if (n % i === 0) {
          suma += i;
        }
      }
      return suma;
    } else {
      console.log("error");
    }
    */
}

//console.log(numeroPrimoSum(9));

function palindromeishon(palabra) {
  //USANDO AUXILIARES (MAS FACIL)
  /*
    let inv = palabra.split('')
    let invertida = inv.reverse();
    let enString = invertida.join('');
    if (palabra === enString) {
        return true;
    } else {
        return false;
    }
    */
}

function palindromeishon(palabra) {
  // USANDO UN BUCLE, RECORRO Y COMPARO
  /*
    let separada = palabra.split('');
    let invertida = '';
    for (let i = separada.length - 1 ; i >= 0 ; i--) {
        invertida += separada[i];
    }
    if (palabra === invertida){
    return true;
    } else {
        return false;
    }
    */
}

//console.log(palindromeishon('oso'));

function SumaParImp(n) {
  /* let par = 0;
    let impar = 0;
    let res = {
        pares: par,
        impares: impar
    };
    for (let i=1;i<=n;i++) {
        if(i % 2 == 0) {
            par += i;
        } else {
            impar += i;
        }
    }
    res = {pares: par,impares: impar}
    return res;
    */
}
//console.log(SumaParImp(3));

function arrayPrimos(a, b) {
  /*
    res = [];

        //auxiliar para saber que si son primos
    function esPrimo(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }


    for(let i=a;i<=b;i++){
        if(esPrimo(i)) {
            res.push(i);
        }
    }
    return res;
    */
}
//console.log(arrayPrimos(10,20));

function fibonacci(num) {
  /*
  let res = [];
  const fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));

  for (let i = 0; i < num ; i++) {
    res.push(fibo(i));
  }
  return res;
  */
}
//console.log(fibonacci(10));

// PARA LOS SIGUIENTES EJERCICIOS USANDO MAP,REDUCE, ETC, crear un array que contenga los mismos numeros que el array dado, pero multiplicados x2

  function porDos() {
    // const numeros = [1, 2, 3, 4, 5];
    // let newNumeros = numeros.map((num) => {
    //   return num * 2;
    // });
    // return newNumeros;
  }

  //console.log(porDos());

// Crea un array partiendo del array dado, que contenga solo las palabras con menos de 5 letras

 function Frutitas() {
//   const palabras = ['manzana', 'banana', 'uva', 'naranja', 'kiwi'];
//   let newFrutita = palabras.filter((fru) => {
//     if(fru.length < 5) {
//       return fru;
//     }
//   });
//   return newFrutita;
 }

//  console.log(Frutitas());



//Calcula la suma de todos los numeros del array

function Sumita() {
  // const numeros = [1, 2, 3, 4, 5];
  // let total = numeros.reduce((tot, num) => {
  //   return  tot + num;
  // },0);
  // return total
}

// console.log(Sumita());

// //Encuentra el primer numero par del array
// const numeros = [1, 3, 5, 6, 7, 8];

// //Calcular el valor total de transacciones cuyo valor es superior a $100
// const transacciones = [
//     { descripcion: 'Surtido', valor: 75 },
//     { descripcion: 'Ropa', valor: 150 },
//     { descripcion: 'Electronica', valor: 200 },
//     { descripcion: 'Libros', valor: 30 },
//     { descripcion: 'Muebles', valor: 300 }
//   ];

//   //Crear un array a partor del array dado, donde los numeros pares esten multiplicados x2, y remueve del array resultante  aquellos valores mayores a 10
//   const numeros = [2, 5, 8, 12, 15, 18, 20];

//   //Calcular el valor total de todos los prductos, retornar como objeto
//   const productos = [
//     { name: 'Manzana', precio: 1.5 },
//     { name: 'Banana', precio: 0.75 },
//     { name: 'Naranja', precio: 2.0 },
//     { name: 'Uvas', precio: 3.5 }
//   ];