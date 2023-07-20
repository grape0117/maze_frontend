import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { MDBRipple } from 'mdb-react-ui-kit';
import { useState } from "react";
import { Container, Row, Col, Image, Navbar, Nav, Form, Button } from "react-bootstrap";
import ModalComponent from './Modal';

let Dark = '#28383A';
let Dark_green = '#04B597';
let Mint_green = '#8CF5C9';
let Light = '#FAF0F0'

function PortfolioPage() {

    const [dark, setdark] = useState(Dark);
    const [drakgreen, setdarkgreen] = useState(Dark_green);
    const [mintgreen, setmintgreen] = useState(Mint_green);
    const [light, setlight] = useState(Light);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

  return (
    <Container fluid>
        <Row className='pt-5'>
        <Col md={2} className='my-auto'>
            <a href="/">
                <Image src="Logo on light.png" style={{width:'16vw' ,height: '10vh'}}  />
            </a>
        </Col>
        <Col md={10} className='pt-5 mb-5'>
            <Navbar expand="lg" className='border-bottom border-5 border-success-subtle'>
            <div className='mx-3'>
                <a href="/home"  style={{color: mintgreen, fontSize:'larger', fontWeight:'900'}}>Home</a>
            </div>
            <div className='mx-3'>
                <a href="/feed"  style={{color: mintgreen, fontSize:'larger', fontWeight:'900'}}>Feed</a>
            </div>
            <div className='mx-3'>
                <a href="/portfolio" style={{color: mintgreen, fontSize:'larger', fontWeight:'900'}}>Portfolio</a>
            </div>
            <Container fluid>
                <Navbar.Brand href="/home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Form className="d-flex">
                    <div className='pr-20'>
                    <Image src="logo800.png" style={{height: '3vh'}}  />
                    </div>
                    <input type="text" placeholder='search' className='form-control-sm' size={40} />
                </Form>
            </Container>
            </Navbar>
        </Col>
        </Row>

        <Row>
            <div style={{backgroundColor:mintgreen, height:'40vh'}} className='mt-40'>
                <div className='row' style={{justifyContent: 'center', alignItems: 'center'}}>
                    <div className='col-md-2'></div>
                    <div className='col-md-6'>
                        <div className='container'>
                            <div className='row mt-40'>
                                <div className='col-md-4 text-center'>
                                    <img src="user.jpg" style={{height: '150px', width: '150px'}} alt="" />
                                </div>
                                <div className='col-md-8'>
                                    <div>
                                        <h1>Stage Name</h1>
                                        <h5>Profession, Profession</h5>
                                        <p>skill,skill</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <div className='col-md-4 text-center'>
                                <p>@username</p>
                                    <p>City, State</p>
                                </div>
                                <div className='col-md-8'>
                                    <p>Bio:Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <div style={{backgroundColor: drakgreen}}>
                            {/* Edit/Follow */}
                            <ModalComponent />
                        </div>
                    </div>
                </div>
            </div>
        </Row>

        <Row className='mt-5'>
            <div style={{backgroundColor:drakgreen, height:'30vh'}}>
                <Row>
                    <div className="container px-4 pt-50">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="text-center" style={{backgroundColor: drakgreen, height:'24vh'}}>
                                    {/* Upload Collection */}
                                    <MDBRipple
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                        rippleTag='div'
                                        rippleColor='light'
                                    >
                                        <img src="coffee/22.jpg" className='rounded' style={{backgroundColor: light, height:'24vh',backgroundImage:'url(coffee/22.jpg)',backgroundPosition: 'center', backgroundSize: 'cover'}} alt="" />
                                        <a href='#!'>
                                        <div className='mask text-white' style={{ backgroundColor: 'rgba(140, 245, 201, 0.7)', height:'20vh'}}>
                                            <h5 className='mt-3'>Collection: Name</h5>
                                            <h5>description: This is coffee.</h5>
                                            <a href="#">click to see more</a>
                                        </div>
                                        </a>
                                    </MDBRipple>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center" style={{backgroundColor: drakgreen, height:'24vh'}}>
                                    {/* Upload Collection */}
                                    <MDBRipple
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                        rippleTag='div'
                                        rippleColor='light'
                                    >
                                        <img src="coffee/22.jpg" className='rounded' style={{backgroundColor: light, height:'24vh',backgroundImage:'url(coffee/22.jpg)',backgroundPosition: 'center', backgroundSize: 'cover'}} alt="" />
                                        <a href='#!'>
                                        <div className='mask text-white' style={{ backgroundColor: 'rgba(140, 245, 201, 0.7)', height:'20vh'}}>
                                            <h5 className='mt-3'>Collection: Name</h5>
                                            <h5>description: This is coffee.</h5>
                                            <a href="#">click to see more</a>
                                        </div>
                                        </a>
                                    </MDBRipple>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center" style={{backgroundColor: drakgreen, height:'24vh'}}>
                                    {/* Upload Collection */}
                                    <MDBRipple
                                        className='bg-image hover-overlay shadow-1-strong rounded'
                                        rippleTag='div'
                                        rippleColor='light'
                                    >
                                        <img src="coffee/22.jpg" className='rounded' style={{backgroundColor: light, height:'24vh',backgroundImage:'url(coffee/22.jpg)',backgroundPosition: 'center', backgroundSize: 'cover'}} alt="" />
                                        <a href='#!'>
                                        <div className='mask text-white' style={{ backgroundColor: 'rgba(140, 245, 201, 0.7)', height:'20vh'}}>
                                            <h5 className='mt-3'>Collection: Name</h5>
                                            <h5>description: This is coffee.</h5>
                                            <a href="#">click to see more</a>
                                        </div>
                                        </a>
                                    </MDBRipple>
                                </div>
                            </div>
                        </div>
                    </div>  
                </Row>
            </div>

        </Row>

    </Container>
  );
}

export default PortfolioPage;