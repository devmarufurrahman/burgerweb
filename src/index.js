import { burgers } from "./data.js";

const burgerWrapper = document.querySelector(".burger-card-wrapper");

class App {
	constructor() {
		this._getBurgers();
	}

	_getBurgers() {
		burgers.forEach((burger) => this._renderBurger(burger));
	}

	_renderBurger(burger) {
		const html = `<div
						class="burger-card rounded-lg shadow-md overflow-hidden w-96 h-96 bg-white">
						<div
							class="burger-img h-48 overflow-hidden flex justify-center items-center flex-col">
							<img
								src=${burger.img}
								alt=${burger.title}
								class="block w-full" />
						</div>
						<div class="burger-texts p-5 flex flex-col items-start gap-5">
							<h2 class="text-2xl font-semibold">${burger.title}</h2>
							<p class="text-xl font-semibold text-orange-500">BDT. ${burger.price}</p>
							<button
								class="bg-orange-600 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">
								Order now
							</button>
						</div>
					</div>`;

		burgerWrapper.insertAdjacentHTML("afterbegin", html);
	}
}

const newApp = new App();
