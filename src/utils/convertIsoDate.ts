export const ConvertIsoDate = (date: Date) => {
	const year = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let day: number | string = date.getDate();
	let hours: number | string = date.getUTCHours();
	let minutes: number | string = date.getUTCMinutes();

	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	return `${day}/${month}/${year} ${hours}:${minutes}`;
};
