"use client";

import { useState, useEffect } from 'react';

import LoadingSkeleton from '../shared/LoadingSkeleton';

const Feedbacks = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay using setTimeout
        setTimeout(() => {
            setLoading(false); // Hide loading skeleton after the delay
        }, 4000); // Adjust the delay time (in milliseconds) as needed
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingSkeleton />
            ) : (
                <div className="">This is the Feedbacks page</div>
            )}
        </div>
    )
}

export default Feedbacks;



