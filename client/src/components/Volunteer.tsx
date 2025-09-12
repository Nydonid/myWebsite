// src/components/portfolio/Volunteer.tsx
import React from 'react';

const volunteer = [
    { period: '2019 – Heute', role: 'Abteilungsleiter J+S', organization: 'CEVI Samedan / Oberengadin' },
    { period: '2015 – 2019', role: 'Leiter', organization: 'CEVI Samedan / Oberengadin' },
];

const Volunteer = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Volunteer</h2>
            <ul className="list-disc list-inside space-y-2">
                {volunteer.map((vol, index) => (
                    <li key={index} className="text-base-content">
                        <strong>{vol.period}</strong>: {vol.role}, {vol.organization}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Volunteer;