lyricsApp.controller("bandsController", function ($scope, $http) {
	$http.get("https://json-server-lyrics-redirect.vercel.app/db.json")
		.then(function(response) {
			$scope.bands = response.data.bands;
		})
		.catch(function(error) {
			console.error(error);
		})
});

lyricsApp.controller("bandName", function($scope) {
	$scope.bandName = window.location.href.split("?")[1].split("=")[1].toUpperCase().replaceAll("_", " ")
});

lyricsApp.controller("songsController", function ($scope, $http) {
	$scope.songs = [];

	
	$http.get("https://json-server-lyrics-redirect.vercel.app/db.json")
	.then(function(response) {
			for(i = 0; i < response.data.songs.length; i++) {
				if(response.data.songs[i].bandParam == window.location.href.split("?")[1].split("=")[1].toLowerCase().replaceAll("_", "-")) {
					response.data.songs[i].bandParam = toTitleCase(response.data.songs[i].bandParam.replaceAll("-"," "))
					$scope.songs.push(response.data.songs[i])
				}
			}
		})
		.catch(function(error) {
			console.error(error);
		})
})

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}