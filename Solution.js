function addition(a,b){
    /*
    let sum = a + b;
    return sum;
    */
}
//console.log(addition(6,7));

function addition(num){
    /*
    return num + 1;
    */
}
//console.log(addition(6));

function convert(minutes){
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

function repetition (txt, n) {
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

function matchHouses(step){
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

function findLargestNum(arr){/*
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

function createPyramid (sim, base, altura) {
    let row = "";
    let col = "";
    for (let i = 0; i < altura ; i++) {
        for (let j = 0; j < base ; j++) {
        }
    }
}
createPyramid("a",6,8);