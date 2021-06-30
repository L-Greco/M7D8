import { Route, RouteComponentProps } from 'react-router-dom'
import { anotherSuperBigObject } from '../types/interfaces'
import {useState,useEffect} from "react"
import { Spinner } from "react-bootstrap"




const Detail = ({match,history,location}:RouteComponentProps) => {
    const id = (match.url.replace("/Detail/",""))
    const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/track/"
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState<anotherSuperBigObject | null>(null)
    const fetchSong = async function () {
    try {
        setLoading(true)
    let res = await fetch(endpoint+id)
    if (res.ok) {
        let result = await res.json()
        setLoading(false)
        setData(result)
        console.log(data)
        
    }
     else  {
        setLoading(false)
         alert("Something went wrong.   Status :  "+res.status)
     }
    } catch (error) {
        setLoading(false)
        console.log(error);
        
    }
}

useEffect( () => {
     fetchSong()
}, [history])

    return <>
        {loading && <Spinner className="mt-3" animation="border" variant="info" />}
        <h1>{data?.title}</h1>
        <img src={data?.album.cover_xl} />

        </>
}

export default Detail