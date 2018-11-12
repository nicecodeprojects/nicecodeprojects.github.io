$(function() {

	$('#my-menu').mmenu({
		extensions: [
			'theme-black', 
			'fx-menu-slide',
			'fx-listitems-slide',
			'pagedim-black',
			'position-right'
		], 
		navbar: {
			title: '<img src="./img/logo-1.svg" alt="Салон красоты Смитлер">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', () => { //here open:finish insted opened should be used
		$('.hamburger').addClass('is-active')
	}).bind('close:finish', () => {
		$('.hamburger').removeClass('is-active')
	});
});
