
$.getJSON('astro.json', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li>' + d['name'] + '   <i>(' + d['craft'] + ')</i>' + '</li>');
    });
});

function getISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
        $('#isslat').html(Math.round(lat*1000)/1000.0);
        $('#isslon').html(Math.round(lon*1000)/1000.0);
    });
    setTimeout(getISS, 3000); 
}

getISS();