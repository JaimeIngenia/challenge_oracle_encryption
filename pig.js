(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var express = require('express');
// const cors = require('cors');
// const app = express();

// var cors = require('cors');
// var bodyParser = require('body-parser');

// //enables cors
// app.use(cors());


// var textoIngresado = prompt("Ingrese el texto para encriptarlo");
// page.innerText = textoIngresado;

//labels

let page = document.getElementById("respuesta");   
let resp2 = document.getElementById("respuesta2");  
let pregunta_input = document.getElementById("pregunta");

// Botones

let btn_encriptar = document.getElementById("encriptar");   
let btn_desencriptar = document.getElementById("desencriptar");   
let btn_copiar = document.getElementById("copiar");   


// imagenes

let muneco = document.getElementById("muneco");



function verificar(){

    var texto = pregunta_input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
     
    if ( texto.length != 0 ){
        alert("Excelente");  
        resp2.style.display = 'block';
        muneco.style.display = 'block';
        muneco.src = "./images/done.svg"  
        // muneco.style.display = 'none';
        resp2.innerText = "Texto encriptado con éxito";
        btn_copiar.textContent='copiar'
    }
    else{
        resp2.style.display = 'none';
        muneco.style.display = 'block';
        muneco.src = "./images/muneco.svg"
        alert("Oooops! Debes ingresar algun texto")
    }
        

    page.innerText = texto;        
  
}

function fnc_desencriptar(){

    var texto = pregunta_input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if ( texto.length != 0 ){
        alert("Excelente");  
        resp2.style.display = 'block';
        muneco.style.display = 'block';
        muneco.src = "./images/done.svg"  
        // muneco.style.display = 'none';
        resp2.innerText = "Texto encriptado con éxito";
        btn_copiar.textContent='copiar'
    }
    else{
        resp2.style.display = 'none';
        muneco.style.display = 'block';
        muneco.src = "./images/muneco.svg"
        alert("Oooops! Debes ingresar algun texto")
    }
        

    page.innerText = texto;        

}

function fnc_copiar(){

    navigator.clipboard.writeText( page.textContent);
    btn_copiar.textContent='copiado!'
    
}

btn_encriptar.onclick = verificar;
btn_desencriptar.onclick = fnc_desencriptar;
btn_copiar.onclick = fnc_copiar;


},{}]},{},[1]);
