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
	openModal()
})

$(modal).click(function() {
	closeModal()
})

$(modalWrapper).click(function(event) {
	event.stopPropagation()
})


function openModal() {
    $(modal).addClass('active')
}

function closeModal() {
    $(modal).removeClass('active')
}


// Обработка формы отправки Консультации
$('.form').on('submit', function(e) {
    e.preventDefault()

    let {name, phone} = e.target?.elements
    console.log(name, phone)


    fetch("http://localhost:3030/chat", {
        method: "POST",
        body: JSON.stringify({
            name: name.value, 
            phone: phone.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log('Response', json)
        alert('Ваша заявка отправлена администратору!')
        closeModal()
    })
    .catch(err => {
        alert('Error:', err)
    })



    /*let telegramUrl = 'https://api.telegram.org/bot5238548555:AAEju3aTgwZzhOG_eHDbr3Hti5R851HLULg/sendMessage'

    $.ajax({
        method: 'POST',
        url: telegramUrl,
        data: {
            chat_id: 355919981,
            parse_mode: 'html',
            text: msg
        },
        success: function(response) {
            if (response?.status == 200) {
                console.log('Успешно отправлено!')
            }
        },
        error: function(error) {
            console.error('Ошибка при отправке', error)
        }
    })*/


})


// Обработка формы отправки Заявки стеллажа
$('.order-form').on('submit', function(e) {
    e.preventDefault()
})


$('.wares-cards').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled:true
    }
});