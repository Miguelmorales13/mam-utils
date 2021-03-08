export async function objectGeneratorFormData<T>(item: T|any):Promise<FormData> {
	let form = new FormData();
	for (const key in item) {
		if (typeof item[key] == "object" && Array.isArray(item[key])) {
			for (const a of item[key]) {
				if (a) {
					await form.append(key, a);
				}
			}
		} else {
			if (item[key]) {
				await form.append(key, item[key]);
			}
		}
	}
	return form;
}
export function objectsSort<T,D>(type: string) {
	return function (a: T, b: D) :1|-1|0{
		// @ts-ignore
		if (!a[type] || !b[type]) return -1;
		// @ts-ignore
		if (a[type] > b[type]) {
			return -1;
		}
		// @ts-ignore
		if (a[type] < b[type]) {
			return 1;
		}
		// a must be equal to b
		return 0;
	};
}
