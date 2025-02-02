

import {ArrowDown} from 'react-feather';
import  {useEffect, useState } from "react";

import styles from "./Body.module.css";
import Editor from '../Editor/Editor';


function Body(){
    const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other :"Other",
    };

    const [resumeInformation, setResumeinformation] = useState({
        [sections.basicsInfo]:{
            id: sections.basicsInfo,
            sectionTitle: sections.basicInfo,
            detail:{},
        },
        [sections.workExp]:{
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details:[],
        },
        [sections.project]:{
            id: sections.project,
            sectionTitle: sections.project,
            details:[],
        },
        [sections.education]:{
            id: sections.education,
            sectionTitle: sections.education,
            details:[],
        },
        [sections.achievement]:{
            id: sections.achievement,
            sectionTitle: sections.achievement,
            point:{},
        },
        [sections.summary]:{
            id: sections.summary,
            sectionTitle: sections.summary,
            detail:"",
        },
        [sections.other]:{
            id: sections.other,
         sectionTitle: sections.other,
            detail:"",
        },

    })

    useEffect(()=>{
        console.log(resumeInformation);
    },[resumeInformation]);
  


    return (
         <div className={styles.container}>
            <p className ={styles.heading}>Online <b>Resume</b> Builder</p>
            <div className = {styles.toolbar}>
                <div className = {styles.colors}>
                    {colors.map((item) => (
                        <span 
                            key ={item}
                            style={{backgroundColor: item}}
                            className={styles.color}

                        />
                    ))}

                </div>
                <button>Download <ArrowDown />
                </button>
                
            </div> 
            <div className ={styles.main}>
                    <Editor
                     sections={sections} information = {resumeInformation} 
                     setResumeinformation ={setResumeinformation}
                     />

                </div>
            
                               
        </div>
    );

}

export default Body;