interface ColorTheme {
	primary: string;
	secondary: string;
	text: string;
	subtext: string;
}

export default class AppColor {
	private static readonly lightTheme: ColorTheme = {
		primary: '#FFFF',
		secondary: '#0F0F',
		text: '#0000',
		subtext: '#000F',
	};

	private static readonly darkTheme: ColorTheme = {
		primary: '#0000',
		secondary: '#0F0F',
		text: '#FFFF',
		subtext: '#FFF0',
	};

	static darkMode: boolean = false;

	static get theme() {
		return this.darkMode ? this.darkTheme : this.lightTheme
	}
}
