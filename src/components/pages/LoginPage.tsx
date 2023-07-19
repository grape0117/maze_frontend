import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from "react";
import { Container, Row, Col, Image, Navbar, Form } from "react-bootstrap";
import { RootState, store } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCreative } from "../../redux/actions/creativeAction";
import LoginForm from "../sections/LoginForm";
import RegisterForm from "../sections/RegisterForm";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const LoginPage = () => {
  const dispatch = store.dispatch;

  const login = useSelector((state: RootState) => state.login);
  const [signForm, setSignForm] = useState("login");

  const handleClick: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault();
    const name = event.currentTarget.getAttribute("id");
    if (name) {
      setSignForm(name);
    }
  };

  useEffect(() => {
    const loadCreative = async () => {
      await dispatch(getCreative(login.session.username));
    };
    if (login.loggedIn) {
      loadCreative();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  let Dark = '#28383A';
  let Dark_green = '#04B597';
  let Mint_green = '#8CF5C9';
  let Light = '#FAF0F0'
  const [dark, setdark] = useState(Dark);
  const [drakgreen, setdarkgreen] = useState(Dark_green);
  const [mintgreen, setmintgreen] = useState(Mint_green);
  const [light, setlight] = useState(Light);


  return (
    <Container fluid >
      <Row>
        <Col md={9}>

          {/* Navbar */}
          <Row className='pt-5'>
            <Col md={3} className='my-auto'>
              <a href="/">
                <Image src="Logo on light.png" style={{width:'16vw' ,height: '10vh'}}  />
              </a>
            </Col>
            <Col md={1}></Col>
            <Col md={8} className='pt-5 mb-5'>
              <Navbar expand="lg" className='border-bottom border-5 border-success-subtle pb-3'>
                <Container fluid>
                  <Navbar.Brand href="/home">
                    {/* <img src="Logo on light.png" style={{width:'30vw', height: '10vh'}} alt="" /> */}
                    <Image src="logo800.png" style={{height: '50vh'}}  />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                      <input type="text" placeholder='search' className='form-control-sm' size={40} />
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          
          <Row className='p-3 mt-3'>
            <div className='p-3'>
              <h2 className='text-center text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <Col md={4}>
              <div className='p-2'>
                <Image src="coffee/4.jpeg" style={{height: '50vh'}} rounded />
              </div>
            </Col>
            <Col md={8}>
              <div className='p-2'>
                <Image src="https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg" style={{height: '50vh'}} rounded />
              </div>
            </Col>
          </Row>
        </Col>

           {/* Login Section */}
        <Col 
            md={3} 
            style={{background: mintgreen, minHeight: '100vh'}}  
          >
            <div className='text-center mt-50'>
              {/* <!-- Nav tabs --> */}
              <div>
                <ul className="nav nav-tabs bg-white-transparent">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home" onClick={handleClick} id="login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1" onClick={handleClick} id="register">Register</a>
                  </li>
                </ul>
              </div>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div className="tab-pane container active" id="home">

                </div>
                <div className="tab-pane container fade" id="menu1"></div>
              </div>

              {signForm === "login" ? <LoginForm /> : <RegisterForm />}
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
