import XLSX from "xlsx";
import {saveAs} from "file-saver";

export function excelRead(file: File) {
	if (!file) return;
	return new Promise((resolve, reject) => {
		let fileReader = new FileReader();
		fileReader.onload = (e: any) => {
			const data = new Uint8Array(e.target.result);
			try {
				let workbook = XLSX.read(data, {type: "array"});
				let rowObject = XLSX.utils.sheet_to_json(
					workbook.Sheets[workbook.SheetNames[0]]
				);
				resolve(rowObject);
			} catch (error) {
				reject(error);
			}
		};
		fileReader.readAsArrayBuffer(file);
	});
}
export function excelGenerator<T extends object>(json: T[]|any[], name: string) {
	const worksheet = XLSX.utils.json_to_sheet(json)
	const workbook: XLSX.WorkBook = {
		Sheets: {
			data: worksheet
		},
		SheetNames: ['data']
	}
	const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'})
    const data = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'})
	saveAs(data, `${name}.xlsx`)
}


