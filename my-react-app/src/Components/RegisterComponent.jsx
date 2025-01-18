import React, { useState } from 'react';
import { createComponent } from '../services/api';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createComponent({ name, price });
            alert('Component registered successfully!');
            setName('');
            setPrice('');
        } catch (error) {
            console.error('Error registering component:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Component</h2>
            <input 
                type="text" 
                placeholder="Component Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterComponent;