$(document).ready(function () {
    
    $('#pobierz').after('<div id="dane-programisty"></div>');

    $('#pobierz').click(pobierzDane);

    function pobierzDane() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            $('#dane-programisty').append('<p class="name">Imię: ' + data.imie + '</p>');


            $('#dane-programisty').append('<p class="lastname">Nazwisko: ' + data.nazwisko + '</p>');


            $('#dane-programisty').append('<p class="occupation">Zawód: ' + data.zawod + '</p>');


            $('#dane-programisty').append('<p class="company">Firma: ' + data.firma + '</p>');

        })
    }
})
