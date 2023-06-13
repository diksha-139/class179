let coordinates = {}

$(document).ready(function () {
    info = get_coordinates();
    // console.log(get_coordinates())

    $("#info").append("<br/>Source Latitude: "+info.source_lat+", Source Logitude: "+info.source_lon+", "+"<br/><br/>"+" Destination Latitude: "+info.destination_lat+", Destination Longitude: "+info.destination_lon)
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        // console.log(searchParams)


        let source = searchParams.get('source')
        let destination = searchParams.get('destination')

        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
        return coordinates
        
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }
}