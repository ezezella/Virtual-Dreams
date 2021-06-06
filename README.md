# Entrega Virtual-Dreams

## Ejercicio 2 

### 1.	¿Qué es un servidor HTTP? 

Un servidor web es un programa informatico que, generalmente a través de el pro-tocolo HTTP, responde a las solicitudes de los usuarios (clientes) mediante el envio de archivos con los cuales se forman paginas web. Este tipo de conexion entre el cliente y el servidor puede ser bidireccional o unidireccional y sincronicas o asincró-nicas y es independiente del lenguaje o aplicación del lado del cliente.

### 2.	¿Qué son los verbos HTTP? Mencionar los más conocidos

Los verbos HTTP son un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Cada uno de ellos implementa una semántica diferente pero algunos grupos comparten características similares.
Los más conocidos son GET y POST pero tambien existen TRACE, PUT, HEAD, PATCH, DELETE, OPTIONS y CONNECT

### 3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?

Los request y response son dos partes del proceso de comunicación entre el cliente y el servidor web. El request es la petición al servidor para accionar sobre una pági-na web (ya sea mostrarla, interactuar, etc). A esta petición, el servidor reacciona y responde a través de un response.
Los headers son la parte central de dichos procesos de comunicación y permiten al cliente y al servidor enviar información adicional junto a alguno de los antes nombra-dos procesos.

### 4.	¿Qué es un queryString? (En el contexto de una url)

Un queryString de un url es la parte de una URL que contiene los datos que deben pasar a las aplicaciones web. Este, generalmente incluye campos agregados a una URL base por un navegador web u otra aplicación cliente. Este comienza a par-tir de ‘?’ y se pueden mandar mas de un campo usando ‘&’ como carácter para unir-los.

### 5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?

El responseCode es un código de respuesta de tres dígitos que es devuelto cuando un motor de búsqueda o un visitante del sitio web realiza una solicitud a un servidor web. Este código indica lo que está a punto de suceder. La principal función de este es indicar si la tarea se realizó correctamente. 
Existen 5 clases de responseCode según lo que buscan informar.
1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299),
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
5. Errores de los servidores (500–599)

### 6.	¿Cómo se envía data en un Get y cómo en un POST? 

Para enviar data en un Get se manejan los datos a través del array asociativo $_GET. Este no permite el envío de datos binarios ni de información superior a 2000 caracteres.

Para enviar data en un POST se utiliza el body del HTTP Request. Este, a diferencia del GET, permite el envío de texto, datos binarios e información sin límite de carac-teres.

### 7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?

El verbo utilizado al acceder a una pagina es GET. Cada vez que hace clic en un en-lace o escribe una URL en la barra de direcciones los navegadores utilizan dicho verbo http.

### 8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.

#### JSON

JSON (Java Script Object Notation) es un formato de texto sencillo para intercam-bio de datos. Este formato de texto tiene una notación de objetos de javascript inde-pendientemente del idioma y es utilizado para enviar datos entre computadoras. Ejemplo:
```
{"pais": “Argentina”,
“provincial”: “Buenos Aires”,
“partido”: “La Matanza”,
“barrio”: “Ramos Mejia”}
```

#### XML

XML (Extensible Markup Language) es un meta-lenguaje que nos permite definir lenguajes de marcado adecuados a usos determinados. El lenguaje XML proporcio-na una plataforma para definir elementos y así crear un formato y generar un len-guaje personalizado. Ejemplo:
```
<note>
<link type="text/css" id="dark-mode" rel="stylesheet" href=""/>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

### 9.	Explicar brevemente el estándar SOAP

SOAP es un estándar basado en XML para la transmisión de mensajes en HTTP y otros protocolos de Internet. Es un protocolo ligero para el intercambio de informa-ción en un entorno descentralizado y distribuido. Este estándar esta formado por un sobre que define una infraestructura para describir el contenido del mensaje y cómo procesarlo, un conjunto de normas de codificación para expresar instancias de tipos de datos definidos por la aplicación y una convención para representar llamadas y respuestas a procedimiento remoto.

### 10.	Explicar brevemente el estándar REST Full

El estándar Restful hace referencia a una API ya construida con protocolo HTTP realizada con el estándar REST, el cual es una lógica de restricciones y recomenda-ciones sobre la cual se puede construir una API (se podría decir que es un tipo de arquitectura). Entonces si se implementara una API con la arquitectura REST, se podria decir que tenemos una restful API.


### 11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?

Los headers en un request contienen información en formato de parámetros que en-vía el cliente al realizar una petición. Se puede utilizar en una solicitud HTTP para proporcionar información sobre el contexto de la solicitud, de modo que el servidor pueda adaptar la respuesta. 
El key Content-Type en un header es una propiedad utilizada para indicar el tipo de contenido o formato del dato que se está enviando.


## Ejercicio 4
Para ejecutar el ejercicio 4, deben seguirse los siguientes pasos:

1) Ingresar desde alguna consola a la ruta del archivo "mostrarPersonas.js"

2) Instalar los modulos express, request y de no haberlos instalado previamente. Para instalarlos se deben utilizar los comandos: "npm install express" y "npm install request".

3) Una vez alli, procedemos a ejecutarlo mediante "node mostrarPersonas.js".


## Ejercicios 5 y 6 
1)Ingresar desde alguna consola a la ruta del archivo "Servidor.js" y ejecutar "node Servidor.js" para comenzar a correr el servidor. 

2)Ingresar al link "localhost:3000/crearPersonas.html" desde algun navegador.

3)Instalar los modulos express, request y body-parser de no haberlos instalado previamente. Para instalarlos se deben utilizar los comandos: "npm install express", "npm install request" y "npm install body-parser".

4)Completar en el navegador los datos teniendo en cuenta que el apellido y dni son obligatorios y que el dni no puede tener mas de 10 caracteres. Hecho esto, procedemos a enviar.

5)De ejecutarse correctamente, la página web mostrará el código "201", lo que significa que se enviaron los datos que se ingresaron. En caso de haber error, se mostraran los numeros 400 (formato del json es inválido) o 500 (otro error no previsto)
