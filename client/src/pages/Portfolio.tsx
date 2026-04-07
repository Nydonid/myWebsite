import React from 'react';
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import PersonalInfo from "../components/PersonalInfo";
import About from "../components/About";
import ProfessionalExperience from "../components/ProfessionalExperience";
import Education from "../components/Education";
import Volunteer from "../components/Volunteer";

function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col">
            <MyHeader />
            <main className="flex-grow flex flex-col items-center">
                <div className="w-full max-w-4xl px-6 py-10 space-y-8">
                    <h1 className="text-3xl font-bold text-base-content">Portfolio</h1>
                    <PersonalInfo />
                    <About />
                    <ProfessionalExperience />
                    <Education />
                    <Volunteer />
                </div>
            </main>
            <MyFooter />
        </div>
    );
}

export default Portfolio;
