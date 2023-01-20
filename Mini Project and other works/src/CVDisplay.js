import React from "react";

import Img from "../assets/personal.jpg"
import styles from "../styles/cvdisplay.module.css";

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const CVDisplay = React.forwardRef((props, ref) => {

    const {profileObj, educationObj, projectObj, skills, experience} = props;

    return(
        <main ref={ref} className={styles.resume}>
            <div className={styles.nameAndImg}>
                <div className={styles.name}>
                    <h1>{profileObj.name}</h1>
                    <p>{profileObj.deloitte_mail}</p>
                    <p>{profileObj.phone}</p>
                    <br></br>
                    <p>{profileObj.summary}</p>
                </div>
                <div>
                    <img src={Img} alt="personal" />
                </div>
            </div>

            <section className={styles.resumeSection}>
                <div className={styles.projAndExp}>
                    <div className={styles.projects}>
                        <h2>Projects</h2>
                        {projectObj.map(( item, index)=>{
                            return(
                                <div key={index} className={styles.card}>
                                    <p className={styles.title}>{item.project_name}</p>
                                    <p className={styles.technology}>Technology: {item.technology}</p>
                                    <p className={styles.description}>{item.description}</p> 
                                    <p className={styles.contribution}>{item.contribution}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className={styles.professional}>
                        <h2>Experience</h2>
                        {experience.map((item,index) =>
                            <div key={index} className={styles.expCard}>
                                <h2 className={styles.expSubTitle}>{item.company_name}</h2>
                                <p><b>Role: </b>{item.role}</p>
                                <p className={styles.pAsSpan}><b>Type: </b>{item.job_type} &nbsp; &nbsp;</p>
                                <p className={styles.pAsSpan}>| &nbsp; <b>Start: </b>{item.start_date} &nbsp; &nbsp;</p>
                                <p className={styles.pAsSpan}>| &nbsp; <b>Duration: </b>{item.duration}</p>
                                <hr></hr>
                                <p>{item.details}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.skillsAndEdu}>
                    <div className={styles.education}>
                    <h2>Education</h2>
                    {educationObj.map(( item, index)=>{
                    return(
                        <div key={index} className={styles.eduBlock}>
                        <p className={styles.subTitle}>Course: {item.course}</p>
                        <p className={styles.bodyContent}>Institution: {item.institution}</p>
                        <p className={styles.bodyContent}>Location: {item.location}</p>
                        <p className={styles.bodyContent}>Year of Passing: {item.pass_year}</p>
                        </div>
                        )
                    })}
                    </div>

                    <div className={styles.skills}>
                        <h2>Skills</h2>
                        {skills.map((item,index) =>
                        <div key={index} className={styles.skillCard}>
                            <p>{item.skill_name}</p>
                            <hr></hr>
                            <span>
                                {[...Array(item.rating)].map((item,index) => 
                                <BsStarFill key={index} className={styles.icon}></BsStarFill>
                                )}
                                {[...Array(5-item.rating)].map((item,index) => 
                                <BsStar  key={index} className={styles.icon}></BsStar>
                                )}
                            </span>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
});

export default CVDisplay;