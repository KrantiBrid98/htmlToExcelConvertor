import * as XLSX from 'xlsx';

export const HtmlTOExcel = () => {
    var elt = document.getElementById('tableToExcel');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return XLSX.writeFile(wb, ('dataTable.xlsx'));
}