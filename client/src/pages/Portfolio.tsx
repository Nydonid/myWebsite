import React from 'react';
import {Link} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import PersonalInfo from "../components/PersonalInfo";
import About from "../components/About";
import ProfessionalExperience from "../components/ProfessionalExperience";
import Education from "../components/Education";
import Volunteer from "../components/Volunteer";

function Portfolio() {
    return (
        <>
            <MyHeader />
            <div className="space-y-8 max-w-4xl mx-auto p-8 lg:ml-[22vw]">
                <h1 className="text-3xl font-bold text-primary">Portfolio</h1>
                <PersonalInfo />
                <About />
                <ProfessionalExperience />
                <Education />
                <Volunteer />
            </div>
        </>
    );
}

export default Portfolio;