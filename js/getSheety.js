$(document).ready(function() {
    $.getJSON('https://api.sheety.co/c0c4cbca-881c-4fec-8a4a-09dc75236ca0', function(data) {
        var template = Handlebars.compile($('#item-template').html())
        $('#items').html(template(data))
    })
})