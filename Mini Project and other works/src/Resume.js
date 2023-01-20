import Header from "./Header"
import Footer from "./Footer"

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import variables from "../styles/variables.module.css";
import styles from "../styles/resume.module.css";
import axios from "axios";
import { useState } from "react";
import GetData from "./GetData";
import CVDisplay from "./CVDisplay";

function Resume(){
    const componentRef = useRef();

    // Declaring the constant url
    const profileUrl = "http://localhost:3000/profile";
    const educationUrl = "http://localhost:3000/education";
    const projectUrl = "http://localhost:3000/projects";
    const professionalUrl = "http://localhost:3000/professional";

    const [profileObj, setprofileObj] = useState({});
    const [educationObj, seteducationObj] = useState([]);
    const [projectObj, setprojectObj] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);

    axios.get(professionalUrl).then( resData => 
    {
        setSkills(resData.data.skills);
        setExperience(resData.data.experience);
    });

    GetData(profileUrl, profileObj, setprofileObj);
    GetData(educationUrl, educationObj, seteducationObj);
    GetData(projectUrl, projectObj, setprojectObj);

    const print = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <>
            <Header />
            <div className={styles.mainHeading}>
                <h1 className={styles.mainTitle}>RESUME</h1>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.cvContainer}>
                    <CVDisplay ref={componentRef} profileObj={profileObj} educationObj={educationObj} projectObj={projectObj} skills={skills} experience={experience} />
                </div>
            </div>

            <div className={styles.downloadDiv}>
              <button onClick={print}>Download Pdf</button>
            </div>
            <Footer />
        </>
    );
}
export default Resume;