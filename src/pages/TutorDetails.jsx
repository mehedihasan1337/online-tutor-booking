import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TutorDetails = () => {
    const tutor=useLoaderData()
    console.log(tutor)
    return (
        <div>
            <h2> Tutor Details  </h2>
            
        </div>
    );
};

export default TutorDetails;