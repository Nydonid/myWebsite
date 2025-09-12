// src/components/portfolio/Education.tsx
import React from 'react';

const education = [
    { period: '09.2023 – Heute', degree: 'Bachelor of Science in Informatik', institution: 'OST – Ostschweizer Fachhochschule, Rapperswil' },
    { period: '02.2025 – 07.2025', degree: 'Auslandsaufenthalt Erasmus+', institution: 'Fachhochschule Technikum Wien, Wien Österreich' },
    { period: '07.2023 – 08.2023', degree: 'Vorkurs «Fit für das Informatikstudium»', institution: 'OST – Ostschweizer Fachhochschule, Rapperswil' },
    { period: '08.2021 – 06.2022', degree: 'Technische Berufsmaturität (BMS)', institution: 'Gewerbliche Berufsschule, Chur' },
    { period: '08.2017 – 07.2021', degree: 'Automatiker EFZ', institution: 'Gewerbliche Berufsschule, Chur' },
];

const Education = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Education</h2>
            <ul className="list-disc list-inside space-y-2">
                {education.map((edu, index) => (
                    <li key={index} className="text-base-content">
                        <strong>{edu.period}</strong>: {edu.degree}, {edu.institution}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;