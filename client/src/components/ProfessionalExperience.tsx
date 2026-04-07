// src/components/portfolio/ProfessionalExperience.tsx
import React from 'react';

const experiences = [
    { period: '08.2025 – Heute', role: 'Werkstudent Product Engineering - Digital Ecosystem', company: 'BELIMO Automation AG, Hinwil', logo: 'belimo-logo.png'},
    { period: '07.2024 – 12.2024', role: 'Studentische Aushilfe - Environmental Sensing Technology', company: 'BELIMO Automation AG, Hinwil', logo: 'belimo-logo.png' },
    { period: '07.2022 – 06.2023', role: 'Militärdienst Durchdiener als Informatikpionier - Gefreiter', company: 'Schweizer Armee', logo: 'ch-armee-logo.png' },
    { period: '08.2017 – 07.2021', role: 'Auszubildender Automatiker EFZ', company: 'EMS-Chemie AG, Domat/Ems', logo: 'ems-chemie-logo.jpg' },
];

const ProfessionalExperience = () => {
    return (
        <article className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Arbeitserfahrung</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {experiences.map((exp, index) => (
                            <tr key={index}>
                                <td className="w-0">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={exp.logo} alt={exp.company} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm opacity-60">{exp.period}</div>
                                    <div className="font-normal">{exp.role}</div>
                                    <div className="font-light">{exp.company}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default ProfessionalExperience;