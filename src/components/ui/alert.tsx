
import React from 'react';

interface AlertProps {
    variant?: 'success' | 'error' | 'info' | 'warning';
    children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'info', children }) => {
    const alertStyles = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
        warning: 'bg-yellow-100 text-yellow-800',
    };

    return (
        <div className={`p-4 rounded ${alertStyles[variant]}`}>
            {children}
        </div>
    );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

