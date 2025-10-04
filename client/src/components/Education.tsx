// src/components/portfolio/Education.tsx
import React from 'react';

const education = [
    { period: '09.2023 – Heute', degree: 'Bachelor of Science in Informatik', institution: 'OST – Ostschweizer Fachhochschule, Rapperswil', logo: 'OST-logo.jpg' },
    { period: '02.2025 – 07.2025', degree: 'Auslandsaufenthalt Erasmus+', institution: 'Fachhochschule Technikum Wien, Wien Österreich', logo: 'fh-technikum-wien-logo.png' },
    { period: '07.2023 – 08.2023', degree: 'Vorkurs «Fit für das Informatikstudium»', institution: 'OST – Ostschweizer Fachhochschule, Rapperswil', logo: 'OST-logo.jpg' },
    { period: '08.2021 – 06.2022', degree: 'Technische Berufsmaturität (BMS)', institution: 'Gewerbliche Berufsschule, Chur', logo: 'gbchur-logo.png' },
    { period: '08.2017 – 07.2021', degree: 'Automatiker EFZ', institution: 'Gewerbliche Berufsschule, Chur', logo: 'gbchur-logo.png' },
];

const Education = () => {
    return (
        <article className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Ausbildung</h2>
            <ul className="list bg-base-100/10 rounded-box">
                {education.map((edu, index) => (
                    <li key={index} className="list-row">
                        <div>
                            <img className="size-10 rounded-box" src={edu.logo} alt={edu.institution} />
                        </div>
                        <div>
                            <div>{edu.period}</div>
                            <div>{edu.degree}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{edu.institution}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Education;