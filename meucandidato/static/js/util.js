$(document).ready(function(){
	//função trace para debug
	function trace(mensagem) {
		try { 
			console.log(mensagem); 
		} 
		catch (e) {
			//caso queira executar alguma função em caso de falta de console
		}
	}

	//checagem de existencia de um elemento.
	if ($('#carrossel').size() >0) {
		$('#carrossel').jcarrossel();
	}
	
	//link externo
	$('.external').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		window.open(url);
	});
	
	//ga
	$('.ga').click(function(e) {
		var tagGa = $(this).attr('rel');
		_gaq.push(['_trackEvent', tagGa]);
	});jQuery.easing.def = 'easeOutBounce';
	if($(".frontpage").size()!=0){
	//elementos da página
	var $controlesAba=$('#control-abas li');
	var $abaListagens=$('#container-abas .listagem');
	var qtdAbas=$controlesAba.length;
	var qtdConteudoAbas=$abaListagens.length;
	if(qtdAbas==qtdConteudoAbas){
		$controlesAba.click(function(e){
			var $_self=$(this);
			indice=$controlesAba.index($_self);
			e.preventDefault();
			this.blur();
			if(!$_self.hasClass('active')){
				$abaListagens.hide();
				$abaListagens.eq(indice).fadeIn();
			$controlesAba.removeClass('active');
			$_self.addClass('active');
			}
		});
	}else{
		alert('quantidade de abas para navegacao diferente da quantidade de conteúdo relacionado')
	}
	}
	// $controlesAba.click(function(e){
	// 		e.preventDefault();
	// 		this.blur();
	// 		// var el = $('#' + this.href.split('#')[1]);
	// 		var method1 = "easeInOutCirc";
	// 		var method2 = "easeInOutCirc";
	// 		$abaListagens.animate({height:200}, {duration: 1000, easing: method1}).animate({height:100}, {duration: 1000, easing: method2});
	// 	});
});
/*$(function(){
    $("select").uniform();
  });*/

//regionalizacao 
  var flag=0;
  var alerta=setInterval(function(){$(".aviso-escolha-estado").hide().fadeIn()},1000);
		$(".aviso-escolha-estado").click(function(){
			clearInterval(alerta);
			$(".aviso-escolha-estado").fadeOut();
			flag=1;
		});	

		$("#select-municipios").change(function(){
			window.location = "/escolherMunicipio/" + $(this).val() + "/";
		});

$("#Map area").click(function(){
	console.log($(this).attr("href"));
	
	$(".aviso-escolha-estado").click();
	
	var texto=$(this).attr("title");
	$(".estado-selecionado").fadeIn().find("strong").text(texto);
	$("#coluna-direita").css("opacity",1);
	$.ajax({
	  type: "GET",
	  url: '/api/municipios/' + $(this).attr("href").replace("#",""),
	  success: function(data) {
	    // console.log(data);
	    $("#select-municipios").html("<option value=''>Escolha a cidade</option>");
	    for (var i=0; i < data.length; i++){
	    	$("#select-municipios").append("<option value='"+ data[i].id +"'>"+ data[i].nome +"</option>");
	    }
	  }
	});
});

/*$("#Map area").hover(function(){

},function(){
	
});*/

var estados = [
["Acre","AC"],
["Alagoas","AL"],
["Amapá","AP"],
["Amazonas","AM"],
["Bahia","BA"],
["Ceará","CE"],
["Distrito Federal","DF"],
["Espírito Santo","ES"],
["Goiás","GO"],
["Maranhão","MA"],
["Mato Grosso","MT"],
["Mato Grosso do Sul","MS"],
["Minas Gerais","MG"],
["Pará","PA"],
["Paraíba","PB"],
["Paraná","PR"],
["Pernambuco","PE"],
["Piauí","PI"],
["Rio de Janeiro","RJ"],
["Rio Grande do Norte","RN"],
["Rio Grande do Sul","RS"],
["Rondônia","RO"],
["Roraima","RR"],
["Santa Catarina","SC"],
["São Paulo","SP"],
["Sergipe","SE"],
["Tocantins","TO"]
];
$("area").each(function(){
	var texto=$(this).attr("href");	
	texto=texto.replace("#","").toUpperCase();
	for (i=0;i<estados.length;i++){
		if(estados[i][1]==texto){
			texto=estados[i][0];
		}
	}
	$(this).attr("title",texto);
});

jQuery(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});