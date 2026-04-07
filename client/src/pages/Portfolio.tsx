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
            <main className="space-y-8 max-w-4xl mx-auto mt-10 ml-6 mr-6  lg:ml-[22vw]">
                <h1 className="text-3xl font-bold max-w-7xl mt-4">Portfolio</h1>
                <PersonalInfo />
                <About />
                <ProfessionalExperience />
                <Education />
                <Volunteer />
            </main>
        </>
    );
}

export default Portfolio;