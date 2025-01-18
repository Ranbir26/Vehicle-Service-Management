import React, { useState, useEffect } from 'react';
import { getComponents, createRepair } from '../services/api';

const IssueReporting = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [components, setComponents] = useState([]);
    const [laborCost, setLaborCost] = useState('');

    useEffect(() => {
        // Fetch components from the API
        const fetchComponents = async () => {
            try {
                const response = await getComponents();
                setComponents(response.data);
            } catch (error) {
                console.error('Error fetching components:', error);
            }
        };
        fetchComponents();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createRepair({
                vehicle: vehicleId,
                components: selectedComponents,
                labor_cost: laborCost,
            });
            alert('Issue reported successfully!');
        } catch (error) {
            console.error('Error reporting issue:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Report Issue</h2>
            <input 
                type="text" 
                placeholder="Vehicle ID" 
                value={vehicleId} 
                onChange={(e) => setVehicleId(e.target.value)} 
                required 
            />
            
            <label>Select Components:</label>
            {components.map((component) => (
                <div key={component.id}>
                    <input
                        type="checkbox"
                        value={component.id}
                        onChange={(e) =>
                            setSelectedComponents((prev) =>
                                e.target.checked
                                    ? [...prev, component.id]
                                    : prev.filter((id) => id !== component.id)
                            )
                        }
                    />
                    {component.name}
                </div>
            ))}

            <input 
                type="number" 
                placeholder="Labor Cost" 
                value={laborCost} 
                onChange={(e) => setLaborCost(e.target.value)} 
                required 
            />
            
            <button type="submit">Report Issue</button>
        </form>
    );
};

export default IssueReporting;