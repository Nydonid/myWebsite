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
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                    {education.map((edu, index) => (
                        <tr key={index}>
                            <td className="w-0">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={edu.logo} alt={edu.institution} />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-sm opacity-60">{edu.period}</div>
                                <div className="font-normal">{edu.degree}</div>
                                <div className="font-light">{edu.institution}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default Education;