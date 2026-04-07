import React from 'react';
import { useTheme } from '../hooks/useThemes';

const PersonalInfo = () => {
    const theme = useTheme();

    return (
        <article>
            <h2 className="text-xl mb-4 font-semibold text-primary">Mattia Stettler</h2>
            <div className="grid grid-cols-2 gap-4 bg-base-200 rounded-lg p-3">
                <figure>
                    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground"></p>
                    <p className="mb-4"><strong>🌍</strong> Silvaplana GR / Rapperswil SG, Schweiz</p>
                    <p className="mb-4"><strong>📧</strong> mattiastettler@bluewin.ch</p>
                    <div className="flex space-x-4">
                        <a href="https://www.github.com/nydonid" target="_blank" rel="noopener noreferrer">
                            <img className="w-7" src={theme === 'dark' ? "/github-icon-white.png" : "/github-icon.png"} alt="github"/>
                        </a>
                    </div>
                </figure>
                <figure>
                    <img src="/MattiaStettler.jpg" alt="Mattia Stettler" className="w-32 float-right rounded" />
                </figure>
            </div>
        </article>

    );
};

export default PersonalInfo;