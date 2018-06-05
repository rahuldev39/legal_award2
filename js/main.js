/*
-----------------------------------------------
Theme: myEvent - Bootstrap Landing Page HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. Preloader
	2. Count Down module
	3. Slick slider
	4. Tabs module
	5. Sort module
	6. Menu module
	7. Map
	8. To Top Button
	9. Header fixed
	10. BTN Klick
	11. SinglePageNav
-----------------------------------------------*/
/* 1. Preloader */
$(window).on('load', function() {
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow');
});
/* END 1. Preloader */

'use strict';

document.addEventListener('DOMContentLoaded', function () {

	/* 2. Count Down module */
	(function () {
		function countDown() {
			var eventDate = new Date(2017, 6, 1, 0, 0, 0, 0),
				date = new Date(),
				timeDiff = Math.abs(eventDate.getTime() - date.getTime()),
				diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
				diffHours = (Math.ceil(timeDiff / (1000 * 3600)) % 12),
				diffMinutes = (Math.ceil(timeDiff / (1000 * 60)) % 60),
				diffSeconds = (Math.ceil(timeDiff / (1000)) % 60);
			document.getElementById('counter__time-days').innerHTML = diffDays;
			document.getElementById('counter__time-hours').innerHTML = diffHours;
			document.getElementById('counter__time-minutes').innerHTML = diffMinutes;
			document.getElementById('counter__time-seconds').innerHTML = diffSeconds;
		}
		countDown();
		setInterval(function () {
			countDown();
		}, 1000);
	}());
	/* 2. END Count Down module */
	/* 3. Slick slider */
	$('.speakers__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	/* 3. END Slick slider */

	/* 4. Tabs module */
	var tabs = (function () {
		var btn = document.querySelectorAll('.schedule__tabs-btn');
		var btn2 = document.querySelectorAll('.schedule__trigger-btn');
		Array.prototype.forEach.call(btn, function (el, i) {
			el.addEventListener('click', function (event) {
				Array.prototype.forEach.call(this.parentNode.children, function (el, i) {
					el.classList.remove('active');
				});
				var dataClass = '.' + this.getAttribute('data-tab');
				var tabs = document.querySelectorAll('.schedule__block');
				var currenttab = document.querySelectorAll(dataClass);
				Array.prototype.forEach.call(tabs, function (el, i) {
					el.classList.remove('active');
				});
				Array.prototype.forEach.call(currenttab, function (el, i) {
					el.classList.add('active');
				});
				event.preventDefault();
				this.classList.add('active');
			});
		});
		Array.prototype.forEach.call(btn2, function (el, i) {
			el.addEventListener('click', function (event) {
				event.preventDefault();
				Array.prototype.forEach.call(this.parentNode.children, function (el, i) {
					el.classList.remove('active');
				});
				this.classList.add('active');
				var dataClass = '.' + this.getAttribute('data-tab');
				var tabs = document.querySelectorAll('.schedule__box');
				var currenttab = document.querySelector(dataClass);
				Array.prototype.forEach.call(tabs, function (el, i) {
					el.classList.remove('active');
				});
				currenttab.classList.add('active');
				console.log(currenttab);
			});
		});

	}());
	/* 4. END Tabs module */

	/* 5. Sort module */
	var sort = (function () {
		var btns = document.querySelectorAll('.gallery__controls a');
		Array.prototype.forEach.call(btns, function (el, i) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				Array.prototype.forEach.call(this.parentNode.children, function (el, i) {
					el.classList.remove('active');
				});
				this.classList.add('active');
				console.log(this.parentNode);
				var dataSort = '.' + e.target.getAttribute('data-sort');
				console.log(dataSort);
				$('.gallery__item').fadeOut();
				$(dataSort).fadeIn();
			})

		});
	}());
	/* 5. END Sort module */

	/* 6. Menu module */
	var menu = (function () {
		var menuHeight = 0;
		var list = document.querySelector('.header__list');
		var menuIco = document.querySelector('.js-menu');
		menuIco.addEventListener('click', function (e) {
			this.classList.toggle('open');
			list.classList.toggle('active');
		});
	}());
	/* 6. END Menu module */

	/* 7. END Map */
	function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 40.7143528, lng: -74.0059731 },
			scrollwheel: false,
			zoom: 11,
			controls: []
		});
		var icon = 'img/marker.png';
		var marker = new google.maps.Marker({
			position: { lat: 40.7143528, lng: -74.0059731 },
			icon: icon,
			map: map
		});
	}
	google.maps.event.addDomListener(window, "load", initMap);
	/* 7. END Map */

	/* 8. To Top Button */
	var back_to_top = $('#goTop');
    if (back_to_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    back_to_top.addClass('show');
                } else {
                    back_to_top.removeClass('show');
                }
            };
        $(window).on('scroll', function() {
            backToTop();
        });
        back_to_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    };
    /* 8. END To Top Button */

    /* 9. Header fixed */
	var navbar = $(".menu-fix"),
		body = $("html,body");
	function track (e) {
		navbar.toggleClass("fix", $(window).scrollTop() > 0);
	}
	$(window).on("scroll", track);
    /* 9. END Header fixed */

    /* 10. BTN Klick */
    $(".intro__btn").on('click', function(event){
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    	top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
    });
    /* 10. END BTN Klick */

    /* 11. SinglePageNav */
	var navInneer = $(".header__list");
    navInneer.singlePageNav({
        updateHash: false,
        filter: ":not(.external)",
        offset: 50,
        speed: 1000,
        currentClass: "current",
        easing: "swing"
    });
	/* END 11. SinglePageNav */
});
