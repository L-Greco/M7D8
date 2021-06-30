import {Container,Row,Col,Card} from "react-bootstrap"

interface QueryListProps {
    tracks: any[]
}
const QueryList = ({tracks}:QueryListProps) => {
    return (
        <Container>
            <Row>
                {tracks.map(track=> (
                    <Col sm={6} md={4} lg= {3} key={track.id}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{track.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{track.artist.name}</Card.Subtitle>
    <Card.Text>
    <img src={track.album.cover_medium} alt="some album picture here" />
    </Card.Text>
    <Card.Link href="#">Details of the song!</Card.Link>
    {/* <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                    </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default QueryList