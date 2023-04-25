export class Helpers {
	static firstLetterUpperCase(str: string): string {
		const valueString = str.toLowerCase();
		return valueString
			.split(' ')
			.map((value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`)
			.join(' ');
	}

	static toLowerCase(str: string): string {
		return str.toLowerCase();
	}
}