var map = L.map('map').setView([4.628076480837979, -74.06592097104559], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.628076480837979, -74.06592097104559]).addTo(map);

// Abrir el archivo GeoJSON
// Javascript se ejecuta de tal manera que si una linea de codigo se demora, se pasa a la siguiente sin esperar.
// Esto puede generar problemas cuando se requiere secuencialidad. - Si se neceita toca indicarle al programa que espere y ahi si ejecute 

async function cargarPuntos(){
    var miArchivo= await fetch ("microondas.geojson");  
    //Convertir el contenido a Json: Que no lo entienda como texto sino como objeto JavaScript

    var datos= await miArchivo.json();
    //Obtener el arreglo de la llave features - Conjunto de objetos tipo feature
    let listaFeatures= datos["features"];

    for(let i=0; i<5;i++){

        let misCoordenadas= listaFeatures[i]["geometry"]["coordinates"];
        var miMarcador= L.marker(misCoordenadas);
        miMarcador.addTo(map);
    }

    

}

cargarPuntos();

