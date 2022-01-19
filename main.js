let menuBurger = document.querySelector('.menu-burger')

menuBurger.addEventListener('click', function() {
    this.classList.toggle('change')
})


$('.wares-cards').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled:true
    }
});