import React, { useEffect } from 'react';
import { getCurrentUser } from '../services/apiAuth';

const TestComponent = () => {
    useEffect(() => {
        const fetchData = async () => {
            const user = await getCurrentUser();
            console.log(user);
        };

        fetchData();
    }, []);

    return <div>Test User</div>;
};

export default TestComponent;
