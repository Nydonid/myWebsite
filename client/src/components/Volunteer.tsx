// src/components/portfolio/Volunteer.tsx
import React from 'react';

const volunteer = [
    { period: '2026 - Heute', role: 'Vize-Präsident', organization: 'Fachschaft Informatik', logo: 'fachschaft-logo.png' },
    { period: '2026 - Heute', role: 'Vorstandsmitglied', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' },
    { period: '2019 – 2025', role: 'Abteilungsleiter J+S', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' },
    { period: '2015 – 2019', role: 'Leiter', organization: 'CEVI Samedan / Oberengadin', logo: 'cevi-logo.png' }
];

const Volunteer = () => {
    return (
        <article className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Ehrenamtlich</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                    {volunteer.map((vol, index) => (
                        <tr key={index}>
                            <td className="w-0">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={vol.logo} alt={vol.organization} />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-sm opacity-60">{vol.period}</div>
                                <div className="font-normal">{vol.role}</div>
                                <div className="font-light">{vol.organization}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default Volunteer;