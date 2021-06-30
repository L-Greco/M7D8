import {Container,Row,Col,Card} from "react-bootstrap"
import {fetchedDataSuperBigObject} from "../types/interfaces"
import {  RouteComponentProps ,withRouter} from 'react-router-dom'
interface QueryListProps {
    tracks: Array<fetchedDataSuperBigObject>

}
type DetailComponentProps = QueryListProps & RouteComponentProps


const QueryList = ({tracks,history,location,match}:DetailComponentProps) => {
    return (
        <Container className="mt-5">
            <Row>
                {tracks.map(track=> (
                    <Col sm={6} md={4} lg= {3} key={track.id} className="mt-1">
                        <Card >
                            <Card.Body>
                                <Card.Title>{track.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{track.artist.name}</Card.Subtitle>
                                <Card.Text>
                                <img className="img-fluid" src={track.album.cover_medium} alt="some album pic here" />
                                </Card.Text>
                                <Card.Link style={{cursor:"pointer"}} onClick ={()=> {
                                    history.push(`/Detail/${track.id}`)
                                }}>Details of the song!</Card.Link>
                             
                            </Card.Body>
                    </Card>

                    </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default withRouter(QueryList)