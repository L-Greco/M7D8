import { Route, RouteComponentProps } from 'react-router-dom'
import { anotherSuperBigObject } from '../types/interfaces'
import {useState,useEffect} from "react"
import { Spinner ,Container,Row,Col,Table} from "react-bootstrap"




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
}, [])
const correctedDuration = (duration:number) => {
    let mins = Math.floor(duration/60)
    let secs = (duration - (mins*60) )>9 ? `${duration - (mins*60)}` :  `0${duration - (mins*60)}` 
    return  mins <10 ? `0${mins}:`+ secs:`${mins}:`+ secs
  
}
    return <>
        {loading && <Spinner className="mt-3" animation="border" variant="info" />}
        { data && <Container>
        <h1>{data!.title}</h1>
            <Row className="mt-4">
                <Col sm={6} >
                <img className="img-fluid" src={data?.album.cover_xl} alt="album img here"/>
                </Col>
                <Col sm={6} style={{position:"relative"}} >                  
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                            <td>Artist </td>
                            <td>{data?.artist.name}</td>  
                            </tr>
                            <tr>
                            <td>Album</td>
                            <td>{data?.album.title}</td>
                            
                            </tr>
                            <tr>
                            <td>Track Position</td>
                            <td >{data?.track_position}</td>
                        
                            </tr>
                            <tr>
                            <td>Duration</td>
                            <td >{correctedDuration(data!.duration)}</td>
                        
                            </tr>
                            <tr>
                            <td>Explicit Lyrics</td>
                            <td >{data?.explicit_lyrics?"Yes":"No"}</td> 
                            </tr>
                            <tr>
                            <td>Release Date </td>
                            <td>{data?.release_date}</td>  
                            </tr>
                            <tr>
                            <td>Bpm </td>
                            <td>{data?.bpm}</td>  
                            </tr>
                            <tr>
                            <td>Share</td>
                            <td><a href={data?.share} target="blank"> Link </a></td>  
                            </tr>
                            <tr>
                            <td>Available Countries</td>
                            <td>{data?.available_countries.length}</td>  
                            </tr>
                            <tr>
                            <td>Contributors</td>
                            <td>{data?.contributors.map(contributor=>(<span key={contributor.id}>{contributor.name}</span>))}</td>  
                            </tr>
                        </tbody>
                    </Table>
                    <audio src={data.preview} controls style={{position:"absolute",left:"14px"}} /> 
                </Col>
            </Row>
        </Container>}
       
       

        </>
}

export default Detail