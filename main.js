let menuBurger = document.querySelector('.menu-burger')
let modalBtns = document.querySelectorAll('[data-modal]')
let menu = document.querySelector('#menu')
let modal = document.querySelector('#modal')
let modalWrapper = document.querySelector('.modal_wrapper')

menuBurger.addEventListener('click', function() {
    this.classList.toggle('change')
    menu.classList.toggle('active')
})


$('[data-modal]').click(function() {
	$(modal).addClass('active')
})

$(modal).click(function() {
	$(modal).removeClass('active')
})

$(modalWrapper).click(function(event) {
	event.stopPropagation()
})

$('.wares-cards').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled:true
    }
});