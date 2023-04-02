import { burgers } from "./data.js";

const burgerWrapper = document.querySelector(".burger-card-wrapper");
const burgerMOdal = document.querySelector(".burger-modal");

class App {
	constructor() {
		this._getBurgers();
	}

	_getBurgers() {
		burgers.forEach((burger) => this._renderBurger(burger));
	}

	_currencyConvert(amount) {
		return amount.toLocaleString("bn-BD", {
			style: "currency",
			currency: "BDT",
		});
	}

	_renderBurger(burger) {
		const html = `<div
						class="burger-card rounded-lg shadow-md overflow-hidden  h-96 bg-white">
						<div
							class="burger-img  h-44 overflow-hidden flex justify-center items-center flex-col">
							<img
								src=${burger.img}
								alt=${burger.title}
								class="block w-full" />
						</div>
						<div class="burger-texts p-5 flex flex-col items-start gap-5">
							<h2 class="text-2xl font-semibold">${burger.title}</h2>
							<p class="text-xl font-semibold text-orange-500">${this._currencyConvert(
								burger.price,
							)}</p>
							<button ${(onclick = this._orderHandler.bind(this))}
								class="order-btn bg-orange-600 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">
								Order now
							</button>
						</div>
					</div>`;

		burgerWrapper.insertAdjacentHTML("afterbegin", html);
	}

	_orderHandler(e) {
		const nodes = e.target.parentNode;
		const title = nodes.children[0].innerText;
		const price = nodes.children[1].innerText;
		burgerMOdal.classList?.remove("opacity-0");
		burgerMOdal.classList.add("opacity-1");

		const html = `<div
						class="modal-container bg-gray-200 h-40 w-72 rounded-md shadow-xl z-10 overflow-hidden flex flex-col p-8 items-center duration-500 ease-in fixed left-2/4 top-2/4 -translate-x-2/4">
						<span class="close absolute right-1 top-1 cursor-pointer">❌</span>
						<h3 class="title-modal text-2xl pb-4 font-semibold">${title}</h3>
						<p class="price-modal">${price}</p>
					</div>`;

		burgerMOdal.innerHTML = html;
		const closeModal = document.querySelector(".close");
		closeModal.addEventListener("click", function (e) {
			// burgerMOdal.classList?.remove("opacity-1");
			burgerMOdal.classList.add("opacity-0");
		});
	}
}

const newApp = new App();
