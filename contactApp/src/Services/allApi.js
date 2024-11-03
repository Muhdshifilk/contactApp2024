import axios from "axios"

const Base_url='http://localhost:3100'

export const addApi=async(data)=>{
    return await axios.post(`${Base_url}/contacts`,data)
}

export const getApi=async()=>{
    return await axios.get(`${Base_url}/contacts`)
}

export const delApi=async(id)=>{
    return await axios.delete(`${Base_url}/contacts/${id}`)
}

export const editApi=async(id,data)=>{
    return await axios.put(`${Base_url}/contacts/${id}`,data)
}