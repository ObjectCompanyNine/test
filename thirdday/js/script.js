window.addEventListener('DOMContentLoaded', function () {
			
			// Получение информации для работы
	let products = document.querySelectorAll('.product'),
			buttons = document.getElementsByTagName('button'),
			shop = document.getElementsByClassName('shop')[0],
			open = document.getElementsByClassName('open')[0];

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.add('buyButtons');
	}

	buttons = document.querySelectorAll('.buyButtons');
			
			// Функция создания корзины	
	function createCart() {
			
			// Создание элементов корзины
		let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				close = document.createElement('button');

			// Создание классов элементам Корзины	
				cart.classList.add('cart');
				field.classList.add('cart-field');
				close.classList.add('close');

			// добавление текста в элемент кнопки и заголовка
				close.textContent = "Закрыть";
				heading.textContent = "В нашей корзине:";

			// добавление элементов на страницу
				document.body.appendChild(cart);
				cart.appendChild(heading);
				cart.appendChild(field);
				cart.appendChild(close);
	}
	createCart();

	let field = document.querySelector('.cart-field'),
			cart = document.querySelector('.cart'),
			close = document.querySelector('.close');

		for (let i = 0; i < buttons.length; i++) {
			// Вешаем обработчик события 'click' на каждую из кнопок
			buttons[i].addEventListener('click', function() {
					if (buttons[i].textContent == "Купить!") {
						buttons[i].textContent = "Убрать";
						field.appendChild(products[i]);
					}else {
						buttons[i].textContent = "Купить!";
						shop.appendChild(products[i]);
					}
			});
			  
		}



	function openCart() {
		cart.style.display = "block"
	}

	function closeCart() {
		cart.style.display = "none"
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

} );