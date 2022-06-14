import { json2xlsx } from "../utils/json2xlsx";

import data from '../../../csv-data.json';

export const Main = () => {
  const handleDownload = () => {
    const response = json2xlsx(data);

    console.log(response)
  };

  return (
    <div>
      <h1>Download CSV</h1>

      <button onClick={handleDownload}>download</button>
    </div>
  )
};
