// import React, { useEffect, useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
// import { getRevenueData } from ' ../services/api'; 

// const RevenueGraph = () => {
//     const [revenueData, setRevenueData] = useState([]);

//     useEffect(() => {
//         const fetchRevenueData = async () => {
//             try {
//                 const response = await getRevenueData(); 
//                 setRevenueData(response.data);
//             } catch (error) {
//                 console.error('Error fetching revenue data:', error);
//             }
//         };

//         fetchRevenueData();
//     }, []);

//     return (
//         <div>
//             <h2>Revenue Graph</h2>
//             <LineChart width={800} height={400} data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
//             </LineChart>
//         </div>
//     );
// };

// export default RevenueGraph;