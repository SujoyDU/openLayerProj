window.onload = init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [-12080385,7567433],
            zoom: 3,
            maxZoom: 7,
            minZoom: 1,
            
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()

            })
        ],
        target: 'js-map'      
    })
   
}
