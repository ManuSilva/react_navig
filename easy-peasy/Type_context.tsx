import { action } from 'easy-peasy';

export const type = {
	fire: {
		url: "10",
		cor: "#ffddcc",
	},
	water: {
		url: "11",
		cor: "#b3ecff",
	},
	grass: {
		url: "12",
		cor: "#b3ffb3",
	},
};


export const ChangeTipo = {
	mode: type.fire,
	toggle: action((state, payload) => {
		switch (payload) {
			case 'fire':
				state.mode = type.fire;
				break;
			case 'water':
				state.mode = type.water;
				break;
			case 'grass':
				state.mode = type.grass;
				break;
			default:
		}
	}),
};

