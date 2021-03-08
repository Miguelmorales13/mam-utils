export function filesSave(buffer: BlobPart, filename: any,type:string) {
	const data = new Blob([buffer], {type})
	saveAs(data, filename)
}
export function filesReadImage(file: File|string) {
	if (!file) {
		return "";
	}
	if (typeof file == "string") {
		return file;
	} else {
		return URL.createObjectURL(file);
	}
}
