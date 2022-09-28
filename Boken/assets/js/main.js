let map;
let start;
$(document).ready(function ($) {

	"use strict";

	const isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

	// scroll

	const scrollWindow = function () {
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.probootstrap_navbar'),
				sd = $('.js-scroll-wrap');



			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
			}

		});
	};
	scrollWindow();


	// navigation
	const OnePageNav = function () {
		var navToggler = $('.navbar-toggler');
		$(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash;

			$('html, body').animate({

				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});
		});
		$("#probootstrap-navbar ul li a[href^='#']").on('click', function (e) {
			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});

	};
	OnePageNav();


	const select2 = function () {
		$('.js-dropdown-multiple, .js-example-basic-single').select2();
	}
	select2();


	const contentWayPoint = function () {
		var i = 0;
		if ($('.probootstrap-animate').length > 0) {
			$('.probootstrap-animate').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('probootstrap-animated')) {

					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function () {

						$('body .probootstrap-animate.item-animate').each(function (k) {
							var el = $(this);
							setTimeout(function () {
								var effect = el.data('animate-effect');
								if (effect === 'fadeIn') {
									el.addClass('fadeIn probootstrap-animated');
								} else if (effect === 'fadeInLeft') {
									el.addClass('fadeInLeft probootstrap-animated');
								} else if (effect === 'fadeInRight') {
									el.addClass('fadeInRight probootstrap-animated');
								} else {
									el.addClass('fadeInUp probootstrap-animated');
								}
								el.removeClass('item-animate');
							}, k * 50, 'easeInOutExpo');
						});

					}, 50);

				}

			}, { offset: '95%' });
		}
	};
	contentWayPoint();



	const owlCarouselFunc = function () {
		$('.js-owl-carousel').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			stagePadding: 50,
			navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

		$('.js-owl-carousel-2').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			stagePadding: 0,
			navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	};
	owlCarouselFunc();

	const ThumbnailOpacity = function () {
		var t = $('.probootstrap-thumbnail');
		t.hover(function () {
			var $this = $(this);
			t.addClass('sleep');
			$this.removeClass('sleep');
		}, function () {
			var $this = $(this);
			t.removeClass('sleep');
		});
	}
	ThumbnailOpacity();

	const datePicker = function () {
		$('#probootstrap-date-departure, #probootstrap-date-arrival').datepicker({
			'format': 'yyyy-m-d',
			'autoclose': true,
			'todayHightlight': true
		});
	};
	datePicker();

	const mapInit = () => {
		// Map Init
		mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdWxhc2g5OSIsImEiOiJjazgxcW5weWQwY3dsM2ZudGIwenRmdmtzIn0.YGoxz4rhS7Kn3vTHJupKcg';
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [77.662848, 12.865219],
			zoom: 11,
			pitch: 45,
			bearing: -17.6,
			antialias: true
		});

		// Add zoom and rotation controls to the map.
		map.addControl(new mapboxgl.NavigationControl());

		// Building Elevation
		map.on('load', () => {
			// Insert the layer beneath any symbol layer.
			const layers = map.getStyle().layers;
			const labelLayerId = layers.find(
				(layer) => layer.type === 'symbol' && layer.layout['text-field']
			).id;

			// The 'building' layer in the Mapbox Streets
			// vector tileset contains building height data
			// from OpenStreetMap.
			map.addLayer(
				{
					'id': 'add-3d-buildings',
					'source': 'composite',
					'source-layer': 'building',
					'filter': ['==', 'extrude', 'true'],
					'type': 'fill-extrusion',
					'minzoom': 15,
					'paint': {
						'fill-extrusion-color': '#aaa',

						// Use an 'interpolate' expression to
						// add a smooth transition effect to
						// the buildings as the user zooms in.
						'fill-extrusion-height': [
							'interpolate',
							['linear'],
							['zoom'],
							15,
							0,
							15.05,
							['get', 'height']
						],
						'fill-extrusion-base': [
							'interpolate',
							['linear'],
							['zoom'],
							15,
							0,
							15.05,
							['get', 'min_height']
						],
						'fill-extrusion-opacity': 0.6
					}
				},
				labelLayerId
			);
		});

		// Map Style toggle
		const layerList = document.getElementById('menu');
		const inputs = layerList.getElementsByTagName('input');

		for (const input of inputs) {
			input.onclick = (layer) => {
				const layerId = layer.target.id;
				map.setStyle('mapbox://styles/mapbox/' + layerId);
			};
		}
		const hours = new Date().getHours()
		const isDayTime = hours > 6 && hours < 20
		if(!isDayTime) document.getElementById("dark-v10").click();

	}
	mapInit();
});


function openLoginWindow() {
	singIn = popupCenter('login.html', 'signIn', 480, 400);
}

function loadAllCities() {

	const xhttp = new XMLHttpRequest();

	xhttp.open("GET", "http://localhost:4040/mongo/city/getCities", false);
	xhttp.send();

	const cities = JSON.parse(xhttp.responseText);

	for (let city of cities) {

		const x = `
		<div class="col-lg-3 col-md-6 probootstrap-animate mb-3">
		<a href="#" class="probootstrap-thumbnail">
		  <img src=${city.img}
			alt="${city.city}" class="img-fluid rounded">
		  <div class="probootstrap-text">
			<h3>${city.city}</h3>
		  </div>
		</a>
	  	</div>
		`;

		document.getElementById('section-cities-content').innerHTML = document.getElementById('section-cities-content').innerHTML + x;
		//document.getElementById('section-cities').innerHTML = document.getElementById('section-cities-content').innerHTML + x;
	}

}
loadAllCities();

function setAttractions(att) {
	document.getElementById('attractions-section').style.display = "block";
	att.forEach(attr => {
		const x = `
		<div class="col-lg-3 col-md-6 mb-3" onclick="changeDest('${attr.loc}')">
		<a href="#map" class="probootstrap-thumbnail">
		  <img src=${attr.pic}
			alt="${attr.loc}" class="img-fluid rounded">
		  <div class="probootstrap-text">
			<h3>${attr.name}</h3>
		  </div>
		</a>
	  	</div>
	  	`;
		document.getElementById('attractions').innerHTML = document.getElementById('attractions').innerHTML + x;
	});
	
}

function getCoordinates(city) {
	const xhttp = new XMLHttpRequest();
	console.log('Coordinates requested for ', city.trim());
	xhttp.open("GET", `http://localhost:4040/mongo/city/getCity/${city.trim()}`, false);
	xhttp.send();
	const res = JSON.parse(xhttp.responseText);
	console.log(res);
	const attractions = res["data"]["attraction"];
	setAttractions(attractions);
	let sourceCoord = attractions[0]['loc'].split(',');
	var b = sourceCoord[0];
	sourceCoord[0] = sourceCoord[1];
	sourceCoord[1] = b;

	return sourceCoord;
}


// create a function to make a directions request
async function getRoute(start, end) {
	// make a directions request using cycling profile
	// an arbitrary start will always be the same
	// only the end or destination will change
	const query = await fetch(
		`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
		{ method: 'GET' }
	);
	const json = await query.json();
	const data = json.routes[0];
	const route = data.geometry.coordinates;
	const geojson = {
		type: 'Feature',
		properties: {},
		geometry: {
			type: 'LineString',
			coordinates: route
		}
	};
	// if the route already exists on the map, we'll reset it using setData
	if (map.getSource('route')) {
		map.getSource('route').setData(geojson);
		document.getElementById('instructions').style.display = "inherit";
	}
	// otherwise, we'll make a new request
	else {
		map.addLayer({
			id: 'route',
			type: 'line',
			source: {
				type: 'geojson',
				data: geojson
			},
			layout: {
				'line-join': 'round',
				'line-cap': 'round'
			},
			paint: {
				'line-color': '#3887be',
				'line-width': 5,
				'line-opacity': 0.75
			}
		});
	}
	// add turn instructions here at the end

	//get the sidebar and add the instructions
	const instructions = document.getElementById('instructions');
	instructions.style.display = "inherit"
	const steps = data.legs[0].steps;

	let tripInstructions = '';
	for (const step of steps) {
		tripInstructions += `<li>${step.maneuver.instruction}</li>`;
	}
	instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
		data.duration / 60
	)} min 🚗 </strong></p><ol>${tripInstructions}</ol>`;
}


function plotMap() {
	const attractions = document.getElementById('attractions');
	attractions.innerHTML = ``;

	const source = document.getElementById("id_label_single").value;
	const dest = document.getElementById("id_label_single2").value;

	start = getCoordinates(source);
	const end = getCoordinates(dest);

	getRoute(start, end);

	map.flyTo({
		// These options control the ending camera position: centered at
		// the target, at zoom level 9, and north up.
		center: end,
		zoom: 12,
		bearing: -17.6,
		 
		// These options control the flight curve, making it move
		// slowly and zoom out almost completely before starting
		// to pan.
		speed: 0.5, // make the flying slow
		curve: 1, // change the speed at which it zooms out
		 
		// This can be any easing function: it takes a number between
		// 0 and 1 and returns another number between 0 and 1.
		easing: (t) => t,
		 
		// this animation is considered essential with respect to prefers-reduced-motion
		essential: true
		});

}

function changeDest(dest) {
	console.log(dest)
	destCoord = dest.split(',');
	let b = destCoord[0];
	destCoord[0] = destCoord[1];
	destCoord[1] = b;
	const end = destCoord
	
	getRoute(start, end);

	map.flyTo({
		// These options control the ending camera position: centered at
		// the target, at zoom level 9, and north up.
		center: end,
		zoom: 12,
		bearing: -17.6,
		 
		// These options control the flight curve, making it move
		// slowly and zoom out almost completely before starting
		// to pan.
		speed: 0.5, // make the flying slow
		curve: 1, // change the speed at which it zooms out
		 
		// This can be any easing function: it takes a number between
		// 0 and 1 and returns another number between 0 and 1.
		easing: (t) => t,
		 
		// this animation is considered essential with respect to prefers-reduced-motion
		essential: true
		});

}