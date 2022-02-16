import { Container, Row } from "react-bootstrap";
import "../styles/Loading.scss"

function Loading() {
     return ( 
          <Container>
               <Row className="justify-content-center">
                    <div className="loader"></div>
               </Row>
          </Container>
     );
}

export default Loading;