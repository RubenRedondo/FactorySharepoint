import React, {FormEvent, useState} from "react";
import type {StepProps} from "../StepProps";
import styles from "../Step.module.scss";

const StepTwo: React.FC<StepProps> = (props) => {

    const [requirementName, setRequirementName] = useState("ere");

    const [requestUser, setRequestUser] = useState("ere");
    const [requestArea, setRequestArea] = useState("ere");
    const [requestRole, setRequestRole] = useState("ere");

    const [preparedByName, setPreparedByName] = useState("er");
    const [preparedByArea, setPreparedByArea] = useState("ere");
    const [preparedByRole, setPreparedByRole] = useState("ere");

    const [derivedToName, setDerivedToName] = useState("ere");
    const [derivedToArea, setDerivedToArea] = useState("ere");
    const [derivedToRole, setDerivedToRole] = useState("ere");

    const [requestDescription, setRequestDescription] = useState("ere");

    const onSubmitApplicantData = (event: FormEvent) => {
        event.preventDefault();
        props.onSuccess({
            requirementName,
            requestUser,
            requestArea,
            requestRole,
            preparedByName,
            preparedByArea,
            preparedByRole,
            derivedToName,
            derivedToArea,
            derivedToRole,
            requestDescription
        })
    }

    return (
        <form className={styles.form} onSubmit={onSubmitApplicantData}>

            <h2>Llena los siguientes campos</h2>

            <div className={`${styles.field} ${styles.fullField}`}>
                <input type="text" value={requirementName} onChange={e => setRequirementName(e.target.value)} required
                       placeholder={"Nombre de requerimiento"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={requestUser} onChange={e => setRequestUser(e.target.value)} required
                       placeholder={"Usuario solicitante"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={requestArea} onChange={e => setRequestArea(e.target.value)} required
                       placeholder={"Area"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={requestRole} onChange={e => setRequestRole(e.target.value)} required
                       placeholder={"Cargo"}/>
            </div>


            <div className={styles.field}>
                <input type="text" value={preparedByName} onChange={e => setPreparedByName(e.target.value)} required
                       placeholder={"Preparado por"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={preparedByArea} onChange={e => setPreparedByArea(e.target.value)} required
                       placeholder={"Area"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={preparedByRole} onChange={e => setPreparedByRole(e.target.value)} required
                       placeholder={"Cargo"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={derivedToName} onChange={e => setDerivedToName(e.target.value)} required
                       placeholder={"Derivado a"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={derivedToArea} onChange={e => setDerivedToArea(e.target.value)} required
                       placeholder={"Area"}/>
            </div>

            <div className={styles.field}>
                <input type="text" value={derivedToRole} onChange={e => setDerivedToRole(e.target.value)} required
                       placeholder={"Cargo"}/>
            </div>

            <div className={`${styles.field} ${styles.fullField}`}>
                <input type="text" value={requestDescription} onChange={e => setRequestDescription(e.target.value)}
                       required
                       placeholder={"Descripcion"}/>
            </div>

            <div className={styles.buttonWrapper}>
                <button>CONTINUAR</button>
            </div>

        </form>
    )
};

export default StepTwo;
