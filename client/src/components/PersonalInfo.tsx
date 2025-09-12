import React from 'react';

const PersonalInfo= () => {
    return (
        <div className="space-y-4 grid grid-cols-2 gap-4">
            <div>
                <h2 className="text-xl font-semibold text-primary">Mattia Stettler</h2>
                <p><strong>Emoji Globe:</strong> Silvaplana / Rapperswil SG, Switzerland</p>
                <p><strong>E-Mail Emoji / Button:</strong> mattiastettler@bluewin.ch</p>
            </div>
            <div>
                <img src="/MattiaStettler.jpg" alt="Mattia Stettler" className="rounded-lg object-cover inset-right-0 h-full w-[10vw]" />
            </div>
        </div>
    );
};

export default PersonalInfo;