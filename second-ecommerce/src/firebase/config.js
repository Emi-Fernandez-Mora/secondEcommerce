
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDC8VGxTHHqIgVO9imlrjOVur8oQd6mGWg",
  authDomain: "secondecommerce-9e199.firebaseapp.com",
  projectId: "secondecommerce-9e199",
  storageBucket: "secondecommerce-9e199.appspot.com",
  messagingSenderId: "498370792910",
  appId: "1:498370792910:web:65603094c23a09b9b46f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app;
}