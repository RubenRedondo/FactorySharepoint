import React, {FormEvent, useState} from "react";
import type {StepProps} from "./StepProps";
import styles from "./Step.module.scss";

const StepTwo: React.FC<StepProps> = (props) => {

    const [area, setArea] = useState("");
    const [application, setApplication] = useState("");
    const [employeeName, setEmployeeName] = useState("");

    const onSubmitApplicantData = (event: FormEvent) => {
        event.preventDefault();
    }
    
    return (
        <form className={styles.form} onSubmit={onSubmitApplicantData}>

            <h2>Llena los siguientes campos</h2>

            <div className={styles.field}>
                <input type="text" value={area} onChange={e => setArea(e.target.value)} placeholder={"Area solicitante"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={application} onChange={e => setApplication(e.target.value)} placeholder={"Aplicación o sistema"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={employeeName} onChange={e => setEmployeeName(e.target.value)} placeholder={"Nombre del solicitante"}/>
            </div>

            <div className={styles.buttonWrapper}>
                <button>CONTINUAR</button>
            </div>

        </form>
    )
};

export default StepTwo;