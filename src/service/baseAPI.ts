import axios from 'axios'

export const baseURL = axios.create({
    
    baseURL: 'http://localhost:3030',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})