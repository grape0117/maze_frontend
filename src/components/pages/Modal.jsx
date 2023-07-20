import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { store, RootState, resetStoreAction } from "../../redux/store/store";
import { createCollection } from '../../redux/actions/collectionAction';

import { Category } from '../../types/categoryType';
import DropzoneComponent from './Dropzone';


function ModalComponent(props) {

    const categories = Object.values(Category);

    const dispatch = store.dispatch;

    const  handleUpload = (e)=> {
        e.preventDefault();
        let formValues = {};
        formValues.title = e.target.title.value;
        formValues.description = e.target.description.value;
        formValues.category = e.target.category.value;
        formValues.keyword = e.target.keyword.value;
        formValues.cover_image = "";
        formValues.ela_images = "";

        const token = localStorage.getItem('session');

        dispatch(createCollection(token, formValues));

        console.log("hello", formValues)
    }


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Upload {props.modalTitle === "Collections"? props.modalTitle : "Elaborates"}</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload {props.modalTitle === "Collections"? props.modalTitle : "Elaborates"} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleUpload} encType='multipart/form-data'>
                            <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="col-form-label float-start">title:</label>
                                        <input type="text" className="form-control" id="title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="col-form-label float-start">description:</label>
                                        <textarea className="form-control" id="description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="col-form-label float-start">category:</label>
                                        <select className="form-select" defaultValue="Select Category" id="category">
                                            {categories.map(ele => 
                                                <option key={ele.id}>{ele}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="keyword" className="col-form-label float-start">keyword:</label>
                                        <input type="text" className="form-control" id="keyword" />
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <label htmlFor="cover-image" className="col-form-label float-start">Cover Image</label>
                                        </div>
                                        <div id='coverimage'>
                                            <DropzoneComponent dropTitle={"Collections"} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <label htmlFor="elaborates" className="col-form-label float-start">Elaborates</label>
                                        </div>
                                        <div>
                                            <DropzoneComponent dropTitle={"Elaborates"} />
                                        </div>
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* <Button variant="primary" style={{backgroundColor: Dark_green}} onClick={handleShow}>
            {props.modalTitle}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="title"
                    autoFocus
                />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea"/>
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal> */}
        </>
    );
}


export default ModalComponent;