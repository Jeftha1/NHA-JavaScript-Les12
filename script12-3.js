$(document).ready(function(){
	$("#btnGetWeather").on('click', function(){
		const cityUrl = 'https://openweathermap.org/city';
		const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Emmeloord,nl&APPID=3a3b835ac7c4b0ea6f87072d46fb8dde&units=metric&lang=nl'; 
		$.ajax({
			url: weatherUrl,
			succes: function(weather){
				console.log(weather.id); 
				const divResult = $('#divResult'); 
				divResult.empty(); 
				let html = '<strong><a href="' + cityUrl + '/' + weather.id + '" ';
					html += 'target="_blank">' + weather.name;
					html += ' (' + weather.sys.country + ')</a></strong>'; 
					html += ', temperatuur: ' + weather.main.temp + ' graden.<br>'; 
				divResult.append(html); 
			},
			error: function (jqXhr, textStatus, errorThrown){
				let html = '<strong>Er is een fout opgetreden: </strong>'; 
					html += jqXhr.responseJSON.cod + ', ' + jqXhr.responseJSON.message;
				$('#divResult').append(html); 
			}
		}); 
	}); 
}); 