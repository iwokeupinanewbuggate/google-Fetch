"use client";

import { dataProcesser } from "./dataProcessor";

export const googlefetch = async () => {
  const apiKey = "AIzaSyAFkUfwWKkzoN4nGcDlOaPALSc3JWTt1gQ";
  const googleSheetId = "1NaT4ogaX96JU3RWk162on8x6nj63IrjTY9EnOu4EI-M";
  const range = "Sheet2!A1:Z100";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${googleSheetId}/values/${range}?key=${apiKey}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Couldn't find fetch");
    }
    const data = await res.json();
    console.log(dataProcesser(data.values));
    return dataProcesser(data.values);
  } catch (error) {
    console.error(error);
    return null;
  }
};
