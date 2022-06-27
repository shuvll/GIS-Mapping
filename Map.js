require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {
    esriConfig.apiKey = "ENTER_YOUR_CUSTOM_API_KEY_HERE";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [0, 0], // Longitude, latitude
        zoom: 0, // Zoom level
        container: "viewDiv" // Div element
    });

});