// src/components/portfolio/Volunteer.tsx
import React from 'react';

const volunteer = [
    { period: '2019 – 2025', role: 'Abteilungsleiter J+S', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' },
    { period: '2015 – 2019', role: 'Leiter', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' },
    { period: '2026 - Heute', role: 'Vorstandsmitglied', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' },
];

const Volunteer = () => {
    return (
        <article className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Ehrenamtlich</h2>
            <ul className="list bg-base-100/10 rounded-box">
                {volunteer.map((vol, index) => (
                    <li key={index} className="list-row">
                        <div>
                            <img className="size-10 rounded-box" src={vol.logo} alt={vol.organization} />
                        </div>
                        <div>
                            <div>{vol.period}</div>
                            <div>{vol.role}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{vol.organization}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Volunteer;