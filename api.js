
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK1l8w3e3MBekZAwTvvyL8a8Jr8RluK_I",
  authDomain: "ethan-van-life-96c43.firebaseapp.com",
  projectId: "ethan-van-life-96c43",
  storageBucket: "ethan-van-life-96c43.appspot.com",
  messagingSenderId: "115699125935",
  appId: "1:115699125935:web:d7d63c756fba4191268e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}