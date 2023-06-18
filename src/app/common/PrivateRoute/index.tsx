import React, { useEffect, useState } from 'react';

type TPrivateRoute = {};

const PrivateRoute: React.FC<TPrivateRoute> = props => {

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        try {
           
        } catch (e) {
            console.log(e);
        };
    }, [])

    return (
        <>
        </>
    )

};

export default PrivateRoute;