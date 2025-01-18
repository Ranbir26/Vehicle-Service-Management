import React, { useState } from 'react';
import { createVehicle } from '../services/api';

const RegisterVehicle = () => {
    const [vin, setVin] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createVehicle({ vin, issue_description: issueDescription });
            alert('Vehicle registered successfully!');
            setVin('');
            setIssueDescription('');
        } catch (error) {
            console.error('Error registering vehicle:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Vehicle</h2>
            <input 
                type="text" 
                placeholder="Vehicle VIN" 
                value={vin} 
                onChange={(e) => setVin(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Issue Description" 
                value={issueDescription} 
                onChange={(e) => setIssueDescription(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterVehicle;