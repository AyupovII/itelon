import { modals } from './modules/modals';
import { accordion } from './modules/accordion';
import { tabs } from './modules/tabs';

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана

window.addEventListener('DOMContentLoaded', () => {
	// Utils
	// ---------------------------------

	// Modules
	// ---------------------------------

	window.addEventListener('load', () => {
		modals();
		accordion();
		tabs()
	});
});

// ---------------------------------
// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// для адаптивного JS используется matchMedia
