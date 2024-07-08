import { Container, Row, Col, Table } from "react-bootstrap";
import { usePenduduk } from "../api/pendudukContext";

function DataPenduduk() {
  const { penduduk, loading, error } = usePenduduk();
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
            <h1>Data Penduduk</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Gender</th>
                <th>Usia</th>
                {/* Tambahkan kolom lain sesuai kebutuhan */}
              </tr>
            </thead>
            <tbody>
              {penduduk.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${user.name.first} ${user.name.last}`}</td>
                  <td>{user.gender}</td>
                  <td>{user.dob.age}</td>
                  {/* Tambahkan kolom lain sesuai kebutuhan */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default DataPenduduk;
