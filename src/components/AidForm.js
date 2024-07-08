// AidForm.js
import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function AidForm({ addAid, editAid, aidToEdit }) {
    const initialFormState = {
        name: '',
        description: '',
        amount: '',
        date: '',
        location: ''
    };

    const [formData, setFormData] = useState(aidToEdit ? aidToEdit : initialFormState);
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.description) formErrors.description = "Description is required";
        if (!formData.amount) formErrors.amount = "Amount is required";
        else if (isNaN(formData.amount)) formErrors.amount = "Amount must be a number";
        if (!formData.date) formErrors.date = "Date is required";
        if (!formData.location) formErrors.location = "Location is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePreview = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setPreview(true);
        }
    };

    const handleSubmit = () => {
        if (editAid) {
            editAid(formData);
            setSuccessMessage('Aid updated successfully!');
        } else {
            addAid(formData);
            setSuccessMessage('Aid added successfully!');
        }
        setFormData(initialFormState);
        setShow(false);
        setPreview(false);
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleShow = () => {
        if (editAid && aidToEdit) {
            setFormData(aidToEdit);
        } else {
            setFormData(initialFormState);
        }
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setErrors({});
        setPreview(false);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-4 btn-animate">
                {editAid ? 'Edit Aid' : 'Add Aid'}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editAid ? 'Edit Aid' : 'Add Aid'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {preview ? (
                        <>
                            <h5>Preview</h5>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Description:</strong> {formData.description}</p>
                            <p><strong>Amount:</strong> {formData.amount}</p>
                            <p><strong>Date:</strong> {formData.date}</p>
                            <p><strong>Location:</strong> {formData.location}</p>
                            <Button variant="primary" onClick={handleSubmit}>Confirm</Button>
                            <Button variant="secondary" onClick={() => setPreview(false)} className="ms-2">Edit</Button>
                        </>
                    ) : (
                        <Card>
                            <Card.Body>
                                <form onSubmit={handlePreview} className="form-animate">
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                                        {errors.name && <div className="text-danger">{errors.name}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea name="description" className="form-control" value={formData.description} onChange={handleChange}></textarea>
                                        {errors.description && <div className="text-danger">{errors.description}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Amount</label>
                                        <input type="number" name="amount" className="form-control" value={formData.amount} onChange={handleChange} />
                                        {errors.amount && <div className="text-danger">{errors.amount}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date</label>
                                        <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} />
                                        {errors.date && <div className="text-danger">{errors.date}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Location</label>
                                        <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
                                        {errors.location && <div className="text-danger">{errors.location}</div>}
                                    </div>
                                    <Button variant="primary" type="submit">
                                        Preview
                                    </Button>
                                </form>
                            </Card.Body>
                        </Card>
                    )}
                </Modal.Body>
            </Modal>

            {successMessage && (
                <div className="alert alert-success mt-3">
                    {successMessage}
                </div>
            )}
        </>
    );
}

export default AidForm;
