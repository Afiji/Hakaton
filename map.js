ymaps.ready(init);
        
function init() {
    var myMap = new ymaps.Map('map', {
        center: [42.87, 74.59], // Замените на координаты вашего адреса
        zoom: 15
    });
    
    var myPlacemark = new ymaps.Placemark([42.87, 74.59], {
        hintContent: 'ITCBOOTCAMP',
        balloonContent: 'Раззакова 32 Бишкек, 720040'
    });
    
    myMap.geoObjects.add(myPlacemark);
}