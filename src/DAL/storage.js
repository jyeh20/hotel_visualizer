// Houses Firebase Storage methods
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const HOTEL_DATA_FOLDER_REF = "hotel_data";

const hotelExcelRef = ref(storage, HOTEL_DATA_FOLDER_REF);

const getHotelRefByName = (docName) => {
  return ref(storage, `${HOTEL_DATA_FOLDER_REF}/${docName}.xlsx`);
};

const getHotelExcelItemsList = async () => {
  const res = await listAll(hotelExcelRef);
  return res.items;
};

const downloadHotelExcelByName = async (docName) => {
  const url = await getDownloadURL(getHotelRefByName(docName));
  console.log(url);

  try {
    const downloadWindow = window.open(url, "_blank");
    setTimeout(() => downloadWindow.close(), 200);
  } catch (error) {
    console.log(error);
  }
};

export { getHotelExcelItemsList, downloadHotelExcelByName };
