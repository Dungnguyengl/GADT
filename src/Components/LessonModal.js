import { useContext } from "react";
import { Button, Col, Container, Modal, ModalTitle, Row } from "react-bootstrap";
import { ModalState } from "../Context/ModalState";

function LessonModal() {
     const {state, Link: {link}} = useContext(ModalState);
     const handleHide = () => {
          state.setShow(false)
          console.clear();
     }
     return (
          <Modal 
               show={state.show}
               size="xl"
               centered
               onHide={handleHide}
          >
               <Modal.Header closeButton>
                    <ModalTitle>Preview</ModalTitle>
               </Modal.Header>
               <Modal.Body>
                    <Container>
                         <Row>
                              <Col>
                                   <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${link}`} title="GA" frameBorder={0}></iframe>
                              </Col>
                         </Row>
                    </Container>
               </Modal.Body>
               <Modal.Footer>
                    <Button variant="danger" onClick={handleHide}>Close</Button>
               </Modal.Footer>
          </Modal>
     );
}

export default LessonModal;