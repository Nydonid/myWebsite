// src/components/portfolio/ProfessionalExperience.tsx
import React from 'react';

const experiences = [
    { period: '08.2025 – Heute', role: 'Werkstudent Product Engineering', company: 'BELIMO Automation AG', logo: 'belimo-logo.png'},
    { period: '07.2024 – 12.2024', role: 'Studentische Aushilfe Environmental Sensing Technology', company: 'BELIMO Automation AG', logo: 'belimo-logo.png' },
    { period: '07.2022 – 06.2023', role: 'Militärdienst Durchdiener als Informatikpionier – Gefreiter', company: 'Schweizer Armee', logo: 'ch-armee-logo.png' },
    { period: '08.2017 – 07.2021', role: 'Auszubildender Automatiker EFZ', company: 'EMS-Chemie AG, Domat/Ems', logo: 'ems-chemie-logo.jpg' },
];

const ProfessionalExperience = () => {
    return (
        <article className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Arbeitserfahrung</h2>
            <ul className="list bg-base-100/10 rounded-box">
                {experiences.map((exp, index) => (
                    <li key={index} className="list-row">
                        <div>
                            <img className="size-10 rounded-box" src={exp.logo} alt={exp.company} />
                        </div>
                        <div>
                            <div>{exp.period}</div>
                            <div>{exp.role}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{exp.company}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default ProfessionalExperience;