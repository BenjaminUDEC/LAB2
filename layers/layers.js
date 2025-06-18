ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([661421.941501, 5921858.661025, 692624.311287, 5937981.908915]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunasMarcadasUTM_1 = new ol.format.GeoJSON();
var features_ComunasMarcadasUTM_1 = format_ComunasMarcadasUTM_1.readFeatures(json_ComunasMarcadasUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComunasMarcadasUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasMarcadasUTM_1.addFeatures(features_ComunasMarcadasUTM_1);
var lyr_ComunasMarcadasUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunasMarcadasUTM_1, 
                style: style_ComunasMarcadasUTM_1,
                popuplayertitle: 'ComunasMarcadasUTM',
                interactive: false,
                title: '<img src="styles/legend/ComunasMarcadasUTM_1.png" /> ComunasMarcadasUTM'
            });
var format_Indicadores_barrios_AMC_2 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_2 = format_Indicadores_barrios_AMC_2.readFeatures(json_Indicadores_barrios_AMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Indicadores_barrios_AMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_2.addFeatures(features_Indicadores_barrios_AMC_2);
var lyr_Indicadores_barrios_AMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_2, 
                style: style_Indicadores_barrios_AMC_2,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: false,
    title: 'Indicadores_barrios_AMC<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_0.png" /> <br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_1.png" /> Altos Chiguayante<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_2.png" /> Barrio Estación<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_3.png" /> Bernardo Ohiggins<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_4.png" /> Cerro Verde Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_5.png" /> Chiguayante centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_6.png" /> Collao<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_7.png" /> Concepción Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_8.png" /> Coronel centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_9.png" /> David Fuentes<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_10.png" /> El Morro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_11.png" /> Hualpencillo<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_12.png" /> Las Higueras<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_13.png" /> Lota Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_14.png" /> Lota Bajo<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_15.png" /> Nuevo Amanecer<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_16.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_17.png" /> Pedro de Valdivia<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_18.png" /> Penco Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_19.png" /> Población cerro Corcovado<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_20.png" /> Villa  Nonguén<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_21.png" /> Villa Italia<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_22.png" /> Yobilo<br />' });
var format_puntosdetrabajo_3 = new ol.format.GeoJSON();
var features_puntosdetrabajo_3 = format_puntosdetrabajo_3.readFeatures(json_puntosdetrabajo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_puntosdetrabajo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntosdetrabajo_3.addFeatures(features_puntosdetrabajo_3);
cluster_puntosdetrabajo_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_puntosdetrabajo_3
});
var lyr_puntosdetrabajo_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_puntosdetrabajo_3, 
                style: style_puntosdetrabajo_3,
                popuplayertitle: 'puntos de trabajo',
                interactive: true,
    title: 'puntos de trabajo<br />\
    <img src="styles/legend/puntosdetrabajo_3_0.png" /> Arauco coronel centro comercial<br />\
    <img src="styles/legend/puntosdetrabajo_3_1.png" /> Biblioteca Municipal "Jose Toribio Medina"<br />\
    <img src="styles/legend/puntosdetrabajo_3_2.png" /> biblioteca publica"pedro marino de "<br />\
    <img src="styles/legend/puntosdetrabajo_3_3.png" /> capilla santa teresa de los andes<br />\
    <img src="styles/legend/puntosdetrabajo_3_4.png" /> cementerio de coronel<br />\
    <img src="styles/legend/puntosdetrabajo_3_5.png" /> Cementerio Parroquial de Penco<br />\
    <img src="styles/legend/puntosdetrabajo_3_6.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/puntosdetrabajo_3_7.png" /> chiflon del diablo<br />\
    <img src="styles/legend/puntosdetrabajo_3_8.png" /> Club hipico concepcion<br />\
    <img src="styles/legend/puntosdetrabajo_3_9.png" /> comienzo Sendero Antena Chiguayante<br />\
    <img src="styles/legend/puntosdetrabajo_3_10.png" /> El morro<br />\
    <img src="styles/legend/puntosdetrabajo_3_11.png" /> Estadio Bernardino Luna<br />\
    <img src="styles/legend/puntosdetrabajo_3_12.png" /> Estadio Municipal Alcandesa Ester Roa<br />\
    <img src="styles/legend/puntosdetrabajo_3_13.png" /> fuerte la planchada<br />\
    <img src="styles/legend/puntosdetrabajo_3_14.png" /> jardin de cantarrana<br />\
    <img src="styles/legend/puntosdetrabajo_3_15.png" /> monolito de agua de las niñas<br />\
    <img src="styles/legend/puntosdetrabajo_3_16.png" /> Museo de Historia Natural de Concepcion<br />\
    <img src="styles/legend/puntosdetrabajo_3_17.png" /> Parque las Araucarias<br />\
    <img src="styles/legend/puntosdetrabajo_3_18.png" /> Parque Los Altos de Chiguayante<br />\
    <img src="styles/legend/puntosdetrabajo_3_19.png" /> Parque Zoologico Concepcion<br />\
    <img src="styles/legend/puntosdetrabajo_3_20.png" /> Plaza Cristo Redentor<br />\
    <img src="styles/legend/puntosdetrabajo_3_21.png" /> plaza de arma de lota<br />\
    <img src="styles/legend/puntosdetrabajo_3_22.png" /> Plaza de Armas de Coronel<br />\
    <img src="styles/legend/puntosdetrabajo_3_23.png" /> Plaza de Armas de Penco<br />\
    <img src="styles/legend/puntosdetrabajo_3_24.png" /> Plaza de Armas de Talcahuano<br />\
    <img src="styles/legend/puntosdetrabajo_3_25.png" /> Plaza de la Independia de concepcion<br />\
    <img src="styles/legend/puntosdetrabajo_3_26.png" /> Plaza España Isabel La Catolica<br />\
    <img src="styles/legend/puntosdetrabajo_3_27.png" /> Teatro de Lota<br />\
    <img src="styles/legend/puntosdetrabajo_3_28.png" /> teatro enrique molina<br />\
    <img src="styles/legend/puntosdetrabajo_3_29.png" /> Templo de concepcion chile<br />\
    <img src="styles/legend/puntosdetrabajo_3_30.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ComunasMarcadasUTM_1.setVisible(true);lyr_Indicadores_barrios_AMC_2.setVisible(true);lyr_puntosdetrabajo_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ComunasMarcadasUTM_1,lyr_Indicadores_barrios_AMC_2,lyr_puntosdetrabajo_3];
lyr_ComunasMarcadasUTM_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', });
lyr_puntosdetrabajo_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Cords X': 'Cords X', 'Cords Y': 'Cords Y', 'Video': 'Video', });
lyr_ComunasMarcadasUTM_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_Indicadores_barrios_AMC_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', });
lyr_puntosdetrabajo_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Cords X': 'TextEdit', 'Cords Y': 'TextEdit', 'Video': 'TextEdit', });
lyr_ComunasMarcadasUTM_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', });
lyr_puntosdetrabajo_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Cords X': 'inline label - always visible', 'Cords Y': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_puntosdetrabajo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});