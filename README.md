# DETECTIVES Y LADRONES

## Índice

* [1. Descripción general y usuario](#1-preámbulo)
* [2. Funcionamiento](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Maquetación](#4-consideraciones-generales)

***

## 1. Preámbulo

El juego [Detectives y ladrones](https://alissonred.github.io/BOG005-cipher/src/)
es un programa pensado para todas las edades que  permite ejercitar habilidades como:

* Pensamiento estrategico
* visión espacial
* Memoria


![caeser-cipher](../BOG005-cipher/src/imag/EJEMPLO.PNG)


Para acceder al juego [haz click aqui](https://alissonred.github.io/BOG005-cipher/src/)

## 2. Resumen del proyecto

El juego consiste en 2 participantes: uno toma el rol de detective y el otro de criminal(ladrón).
El ambito del juego es una ciudad cuyos lugares se encuentran posicionados en forma de cuadrícula; cada lugar posee un monto asignado y tiene una posición definida que se cuenta desde cero de izquierda a derecha.

 El objetivo del criminal es conseguir la mayor cantidad de bonificación (seleccionar uno de los 3 montos más altos) sin dejarse acorralar por el detective (debe estár por lo menos a mas de 2 posiciones del agente). Mientras que el objetivo del detective consiste en proteger los montos de cada lugar.

 El que logre cumplir su objetivo en la partida, se queda con el monto del lugar en disputa.

El juego consiste en los siguientes pasos:
* Cada participante debe llenar sus datos
* En el mapa al seleccionar nuevo set, aparecerán los lugares de la ciudad y su monto correspondiente. 
* El criminal deberá ingresar la posición en numeros y codificarla (conteo de izquierda a derecha desde la parte suoerior izquierda de la cuadricula). Lo anterior teniendo en cuenta que debe ser uno de los tres montos mas grandes que aparecen. y deberá codificar la posición
* EL detective posteriormente ingresará la posición en numeros, teniendo en cuenta que debe estar lo mas cerca posible al criminal (posición menor o igual a 2 lugares)
* Al final aparecerán los resultados con el monto correspondiente según el logro

## 3. Objetivos de aprendizaje

Para poder realizar este proyecto, se tuvieron en cuenta los siguientes recursos de información:
### HTML

* Uso de HTML sematico
* Entrada ( texto a cifrar, clave)
* Botones (r, cifrar y descifrar)

### CSS
* Aplicación de estilos a selectores

### JavaScript
* Creación de variables
* Uso de ciclos, condicionales, funciones y métodos

### Control de versiones Git y GitHub
* Instalación y ocnfiguración de Git y GitHub
* Creación de versiones
* Creación de fork de repositorio remoto
* Carge de información de repositorio local a remoto

## 4. Consideraciones generales
El prototipo inicial de alta fidelidad se realizo en la plataforma FIGMA [Maquetación](https://www.figma.com/file/rlO3MnPnZ2mytzN4Ye9EsO/ESPY%2F-THIEF?node-id=9%3A106)

Inicialmente se pensó como un juego de más integrantes en el que se codificaran los mensajes para que coordinaran las posiciones. Sin embargo, para hacer mas sencillo el juego no solo se redujo el numero de miembros, sino que tambien se limitó unicamente a codificar la posición de uno de los equipos (el criminal). La propuesta inicial se tomará en trabajos futuros.
Hasta el momento la herramienta funciona para cifrar y descifrar mayusculas, minusculas, numeros y algunos caracteres especiales.

