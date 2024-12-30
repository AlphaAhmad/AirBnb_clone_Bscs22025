import { useState } from 'react';
import axios from 'axios';
import "../css files/admin.css";

function AdminPanel() {
    const [formData, setFormData] = useState({
        Housename: '',
        Bedrooms: '',
        Rate: '',
        desc: '',
        category: '',
        imgSrc: ''
    });

    const [deleteId, setDeleteId] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                Housename: formData.Housename,
                Bedrooms: parseInt(formData.Bedrooms, 10),
                Rate: parseInt(formData.Rate, 10),
                desc: formData.desc,
                category: formData.category,
                imgSrc: formData.imgSrc,
            };
            const response = await axios.post('http://localhost:3000/addhouse/save', dataToSend);
            if (response.status === 201) {
                alert('The house was added successfully!');
            }
            setFormData({
                Housename: '',
                Bedrooms: '',
                Rate: '',
                desc: '',
                category: '',
                imgSrc: ''
            });
        } catch (error) {
            console.error("Something went wrong", error);
            alert("There was a problem while saving the house data.");
        }
    };

    const handleDelete = async () => {
        if (!deleteId) {
            alert('Please enter a valid ID');
            return;
        }
        try {
            const response = await axios.delete(`http://localhost:3000/addhouse/delete/${deleteId}`);
            if (response.status === 200) {
                alert('House deleted successfully!');
                setDeleteId('');
            }
        } catch (error) {
            console.error('Failed to delete the house:', error);
            alert('There was a problem while deleting the house.');
        }
    };

    return (
        <div className="admin-panel">
            <h2 className="admin-title">Admin Panel - Add House</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Housename:</label>
                    <input
                        type="text"
                        name="Housename"
                        className="form-input"
                        value={formData.Housename}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Bedrooms:</label>
                    <input
                        type="number"
                        name="Bedrooms"
                        className="form-input"
                        value={formData.Bedrooms}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Rate:</label>
                    <input
                        type="number"
                        name="Rate"
                        className="form-input"
                        value={formData.Rate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Description:</label>
                    <input
                        type="text"
                        name="desc"
                        className="form-input"
                        value={formData.desc}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Category:</label>
                    <input
                        type="text"
                        name="category"
                        className="form-input"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Image URL:</label>
                    <input
                        type="text"
                        name="imgSrc"
                        className="form-input"
                        value={formData.imgSrc}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add House</button>
            </form>

            {/* Delete Section */}
            <div className="delete-section">
                <h3 className="delete-title">Delete House by ID</h3>
                <div className="form-group">
                    <label className="form-label">House ID:</label>
                    <input
                        type="text"
                        name="deleteId"
                        className="form-input"
                        value={deleteId}
                        onChange={(e) => setDeleteId(e.target.value)}
                        required
                    />
                </div>
                <button className="delete-button" onClick={handleDelete}>Delete House</button>
            </div>
        </div>
    );
}

export default AdminPanel;
