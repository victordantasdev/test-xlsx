import { utils, writeFile } from 'xlsx';

const saveToXLX = (data: any) => {
  const workbook = utils.book_new();
  const data_worksheet = 
    utils.json_to_sheet(data);

  utils.book_append_sheet(
    workbook, 
    data_worksheet, 
    "Data"
  );

  writeFile(workbook, "out.xlsx");
};

export const json2xlsx = (dataInJSON: { data: Array<{}>, headers: Array<{ key: string; label: string; }>}) => {
  const getreativeHeader = (str: string): {
    key: string;
    label: string;
} | undefined => dataInJSON.headers.find((h: any) => h.key === str)
  
  const filteredData = dataInJSON.data
  .flatMap((data: { [key: string]: string }) => {
      let d: { [key: string]: any } = {};
      Object.keys(data)
          .forEach((k) => {
            d[getreativeHeader(k)!.label] = data[k]
          })
  
      return d;
  });

  saveToXLX(filteredData);
  // const data = saveToXLX(filteredData);
  // return data;
}


