import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import appConfig from "../config";

const firebaseApp = initializeApp(appConfig.firebaseKeys);
export const db = getDatabase(firebaseApp);
