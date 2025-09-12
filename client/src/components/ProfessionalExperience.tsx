// src/components/portfolio/ProfessionalExperience.tsx
import React from 'react';

const experiences = [
    { period: '07.2024 – 12.2024', role: 'Studentische Aushilfe Environmental Sensing Technology', company: 'BELIMO Automation AG' },
    { period: '07.2022 – 06.2023', role: 'Militärdienst Durchdiener als Informatikpionier – Gefreiter', company: 'Schweizer Armee' },
    { period: '08.2017 – 07.2021', role: 'Auszubildender Automatiker EFZ', company: 'EMS-Chemie AG, Domat/Ems' },
];

const ProfessionalExperience = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Work Experience</h2>
            <ul className="list-disc list-inside space-y-2">
                {experiences.map((exp, index) => (
                    <li key={index} className="text-base-content">
                        <strong>{exp.period}</strong>: {exp.role}, {exp.company}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfessionalExperience;