export function convertCMtoDPIS(cm: number, dpis:number = 72) {
	return Math.round((cm * dpis) / 2.54);
}
