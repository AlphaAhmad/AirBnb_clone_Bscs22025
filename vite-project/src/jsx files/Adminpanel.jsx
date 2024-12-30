import { useState } from 'react';
import axios from 'axios';
import "../css files/admin.css"
function AdminPanel() {
    const [formData, setFormData] = useState({
        Housename: '',
        Bedrooms: '',
        Rate: '',
        desc: '',
        category: '',
        imgSrc: ''
    });

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
            // Convert Bedrooms and Rate to integers before sending
            const dataToSend = {
                Housename: formData.Housename,
                Bedrooms: parseInt(formData.Bedrooms, 10),
                Rate: parseInt(formData.Rate, 10),
                desc: formData.desc,
                category: formData.category,
                imgSrc: formData.imgSrc,
            };

            const response = await axios.post('http://localhost:3000/addhouse/save', dataToSend);
            if(response.status===201)
            {
                alert('The house was added successfully!');
            }
            

            // To Reset the form data after cleaning
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
</div>
    );
}

export default AdminPanel;
