import { Container, Row, Col, Table } from "react-bootstrap";
import { useLocations } from "../api/locContext";

function AidLoc() {
  const { locations, loading, error } = useLocations();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Data Lokasi Bencana</h1>
          </div>
          <h1>Nation: United-States</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Year</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location, index) => (
                <tr key={index}>
                  <td>{location.Year}</td>
                  <td>{location.Population}</td>  
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AidLoc;
