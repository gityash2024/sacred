import React from 'react';


interface FadeInSectionProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '' }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
