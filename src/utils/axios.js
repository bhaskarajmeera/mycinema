import axios from "axios"
const apiKEY=import.meta.env.VITE_OMDB_API_KEY
const apiEp=`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKEY}&`;

export const fetchFromAPI=async(str)=>{
    try{
        const url=apiEp+"t="+str;
        const response=await axios.get(url);
    console.log(response);
    return response.data;
}catch(error){console.log(error)}
}