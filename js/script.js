$(document).ready(function () {

    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    $('.selettore').change(function (){
    var genereAlbum = $(this).val();
    console.log(genereAlbum);
    var genereCarta = $('.card').data('codice');
    console.log(genereCarta);
    var generiApi = dati.genere;
    console.log(generiApi);

    if (genereAlbum == "") {
        $('.card').show();



    }
    else {
        $('.card').each(function () {

            if ($(this).data('codice').toLowerCase() == genereAlbum.toLowerCase()) {
                $(this).show();

            }
            else {
                $(this).hide();
            }

        })
    }




})

    var dati = {
        immagine:"",
        album:"",
        artista:"",
        anno:"",
        genere:""
    }


    $.ajax({

        url:"https://flynn.boolean.careers/exercises/api/array/music",
        method:"GET",
        success:function(data) {

            var albums = data.response

            for (var i = 0; i < albums.length; i++) {
                var album = albums[i]

                dati.immagine = album.poster;
                dati.album = album.title;
                dati.artista = album.author;
                dati.anno = album.year;
                dati.genere = album.genre;

                var templateAlbum = template(dati);
                $(".container-card").append(templateAlbum);


            }







        }





        ,
        error:function () {
            alert("error");

        }




    });





})
