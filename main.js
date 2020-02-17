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
        target: 'js-map',      
        keyboardEventTarget: document
    })

    const popupContainerElement = document.getElementById('popup-coordinates');
    const popup = new ol.Overlay({
        element: popupContainerElement,
        positioning: 'center-left'
    })
   
    map.addOverlay(popup);

    map.on('click', function(e) {
        const clickedCoordinate = e.coordinate;
        popup.setPosition(undefined);
        popup.setPosition(clickedCoordinate);
        popupContainerElement.innerHTML = clickedCoordinate;

    })

    //dragRotate Interaction
    const dragRotateInteraction = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    })

    map.addInteraction(dragRotateInteraction);

    const drawInteraction = new ol.interaction.Draw({
        type: 'Polygon',
        freehand: true
    })

    map.addInteraction(drawInteraction);

    drawInteraction.on('drawend', function(e){
        let parser = new ol.format.GeoJSON();
        let drawnFeatures = parser.writeFeaturesObject([e.feature]);
        console.log(drawnFeatures);
    })
}
