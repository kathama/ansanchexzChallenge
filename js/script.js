//variable
const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnJ0 = document.getElementById("btnJ0");
const btnClear = document.getElementById("btnClear");

//variable numeros y letras
let letters = "";
let numbers = "";

//funciones
const fnA1 = () => {
  if (letters == "") {
    letters += "A";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "") {
      numbers += "1";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnB2 = () => {
  if (letters == "A") {
    letters += "B";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "1") {
      numbers += "2";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnC3 = () => {
  if (letters == "AB") {
    letters += "C";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "12") {
      numbers += "3";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnD4 = () => {
  if (letters == "ABC") {
    letters += "D";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "123") {
      numbers += "4";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnE5 = () => {
  if (letters == "ABCD") {
    letters += "E";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "1234") {
      numbers += "5";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnF6 = () => {
  if (letters == "ABCDE") {
    letters += "F";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "12345") {
      numbers += "6";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnG7 = () => {
  if (letters == "ABCDEF") {
    letters += "G";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "123456") {
      numbers += "7";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnH8 = () => {
  if (letters == "ABCDEFG") {
    letters += "H";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "1234567") {
      numbers += "8";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnI9 = () => {
  if (letters == "ABCDEFGH") {
    letters += "I";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "12345678") {
      numbers += "9";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnJ0 = () => {
  if (letters == "ABCDEFGHI") {
    letters += "J";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (letters == "ABCDEFGHIJ" && numbers == "123456789") {
      numbers += "0";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

const fnClear = () => {
  if (
    letters == "A" ||
    letters == "AB" ||
    letters == "ABC" ||
    letters == "ABCD" ||
    letters == "ABCDE" ||
    letters == "ABCDEF" ||
    letters == "ABCDEFG" ||
    letters == "ABCDEFGH" ||
    letters == "ABCDEFGHI" ||
    letters == "ABCDEFGHIJ"
  ) {
    letters = "";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    if (
      numbers == "1" ||
      numbers == "12" ||
      numbers == "123" ||
      numbers == "1234" ||
      numbers == "12345" ||
      numbers == "123456" ||
      numbers == "1234567" ||
      numbers == "12345678" ||
      numbers == "123456789" ||
      numbers == "1234567890"
    ) {
      numbers = "";
      document.getElementById("numerosId").innerHTML = numbers;
    } else {
      alert("inicia en el orden valido");
    }
  }
};

//eventos
btnA1.onclick = function () {
  //funcion que se activa con el boton
  fnA1();
};
btnB2.onclick = function () {
  //funcion que se activa con el boton
  fnB2();
};
btnC3.onclick = function () {
  //funcion que se activa con el boton
  fnC3();
};
btnD4.onclick = function () {
  //funcion que se activa con el boton
  fnD4();
};
btnE5.onclick = function () {
  //funcion que se activa con el boton
  fnE5();
};
btnF6.onclick = function () {
  //funcion que se activa con el boton
  fnF6();
};
btnG7.onclick = function () {
  //funcion que se activa con el boton
  fnG7();
};
btnH8.onclick = function () {
  //funcion que se activa con el boton
  fnH8();
};
btnI9.onclick = function () {
  //funcion que se activa con el boton
  fnI9();
};
btnJ0.onclick = function () {
  //funcion que se activa con el boton
  fnJ0();
};
btnClear.onclick = function () {
  //funcion que se activa con el boton
  fnClear();
};
