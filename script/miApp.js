$(document).ready(function () {
    $("#aprilia").click(function () {
        $("#modaprilia").slideToggle();
    });
    $("#bmw").click(function () {
        $("#modbmw").slideToggle();
    });
    $("#benelli").click(function () {
        $("#modbenelli").slideToggle();
    });
    $("#bimota").click(function () {
        $("#modbimota").slideToggle();
    });
    $("#brp").click(function () {
        $("#modbrp").slideToggle();
    });
    $("#bultaco").click(function () {
        $("#modbultaco").slideToggle();
    });
    $("#derbi").click(function () {
        $("#modderbi").slideToggle();
    });
    $("#ducati").click(function () {
        $("#modducati").slideToggle();
    });
    $("#scram").click(function () {
        $("#modscram").slideToggle();
    });
    $("#gasgas").click(function () {
        $("#modgasgas").slideToggle();
    });
    $("#hangway").click(function () {
        $("#modhangway").slideToggle();
    });
    $("#hd").click(function () {
        $("#modhd").slideToggle();
    });
    $("#honda").click(function () {
        $("#modhonda").slideToggle();
    });
    $("#husqvarna").click(function () {
        $("#modhusqvarna").slideToggle();
    });
    $("#hyosung").click(function () {
        $("#modhyosung").slideToggle();
    });
    $("#kawasaki").click(function () {
        $("#modkawasaki").slideToggle();
    });
    $("#suzuki").click(function () {
        $("#modsuzuki").slideToggle();
    });
    $("#sym").click(function () {
        $("#modsym").slideToggle();
    });
    $("#sherco").click(function () {
        $("#modsherco").slideToggle();
    });
    $("#ktm").click(function () {
        $("#modktm").slideToggle();
    });
    $("#mv").click(function () {
        $("#modmv").slideToggle();
    });
    $("#lml").click(function () {
        $("#modlml").slideToggle();
    });
    $("#mash").click(function () {
        $("#modmash").slideToggle();
    });
    $("#mondial").click(function () {
        $("#modmondial").slideToggle();
    });
    $("#montesa").click(function () {
        $("#modmontesa").slideToggle();
    });
    $("#guzzi").click(function () {
        $("#modguzzi").slideToggle();
    });
    $("#scomadi").click(function () {
        $("#modscomadi").slideToggle();
    });
    $("#keeway").click(function () {
        $("#modkeeway").slideToggle();
    });
});
jQuery(document).ready(function ($) {
    $('#myCarousel').carousel({
        interval: 5000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        }
        catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});
var app = angular.module('miApp', []);
app.controller('controlGal', function ($scope, $http, $timeout) {
            $http.get("motos.json").then(function (response) {
                $scope.motos = response.data.motos;
            });
            $scope.modelo = 1;
            $scope.modSeleccionado = "";
            $scope.estaSeleccionado = function (aux) {
                return ($scope.modelo == aux);
            }
            $scope.selecciona = function (aux) {
                $scope.modelo = aux;
                switch (aux) {
                case 2:
                    $scope.modSeleccionado = "RSV4FW-GP";
                    break;
                case 3:
                    $scope.modSeleccionado = "RSV4-RF";
                    break;
                case 4:
                    $scope.modSeleccionado = "RSV4-RR";
                    break;
                default:
                    $scope.modSeleccionado = "";
                }
            };
    });