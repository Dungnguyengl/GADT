import { useState, useContext } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import loginService from "../Services/loginService";

import {Data} from "../Context/DataContext"

function Login() {
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const {login:{login, setLogin}} = useContext(Data)
     const handleSubmit = (e) => {
          e.preventDefault();
          loginService(username, password)
               .then(res => {setLogin({
                    ...login, 
                    isLogin: true, 
                    tableInfo: encodeURIComponent(res.data.tableInfo)
               })})
               .catch(e => console.log(e))
     }

     const handleChangeUsername = e => {
          setUsername(e.target.value);
     }

     const handleChangePassword = e => {
          setPassword(e.target.value);
     }


     return (
          <Container>
                    <Card>
                         <Card.Header>
                              Login
                         </Card.Header>
                         <Card.Body>
                              <Form onSubmit={handleSubmit}>
                                   <Form.Group>
                                        <Form.Label
                                             htmlFor="Username"
                                        >
                                             User Name:
                                        </Form.Label>
                                        <Form.Control
                                             type="text"
                                             id="Username"
                                             value={username}
                                             onChange={handleChangeUsername}
                                        />
                                   </Form.Group>
                                   <Form.Group>
                                        <Form.Label
                                             htmlFor="Password"
                                        >
                                             Password:
                                        </Form.Label>
                                        <Form.Control
                                             type="password"
                                             id="Password"
                                             value={password}
                                             onChange={handleChangePassword}
                                        />
                                   </Form.Group>
                                   <Button variant="primary" type="submit">
                                        Login
                                   </Button>
                              </Form>
                         </Card.Body>
                    </Card>
          </Container>
     );
}

export default Login;