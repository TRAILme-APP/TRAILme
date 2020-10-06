import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Analytics() {


    const { user, isAuthenticated } = useAuth0();
    return (
        <div className="text-light">
            This is Analytics Page
        </div>
    )
}
