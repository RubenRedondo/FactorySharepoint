import React, {forwardRef} from "react";
import styles from "./RequestFile.module.scss";
import {generateIdWithName, getCurrentDate} from "../../../../utils/functions";
import {RequestFileProps} from "./RequestFileProps";

const RequestFile = forwardRef<HTMLDivElement, RequestFileProps>((props, ref) => {
    return (
        <div className={styles.wrapper} ref={ref}>

            <a className={styles.genteraLogo}><img className={styles.genteraLogoImg} width={120} src="https://i.ibb.co/RPL7Sj8/logo.png" alt="Gentera"/></a>
            <a className={styles.genteraLogo}><img className={styles.genteraLogoImg} width={120} src="https://i.ibb.co/HFmJ7qQ/fsLogo.png" alt="fsLogo"/></a>

            <h1>Formato de solicitud de desarrollo</h1>

            <div className={styles.formatForm}>
                <label className={styles.requirementName}>
                    Nombre del requerimiento
                </label>
                <span className={styles.requirementName}>
                    {props.data.requirementName}
                </span>

                <label className={styles.requirementID}>
                    ID de requerimiento
                </label>

                <span className={styles.requirementID}>
                    {generateIdWithName(props.data.requirementName)}
                </span>

                <label className={styles.requirementDate}>
                    Fecha de requerimiento
                </label>

                <span className={styles.requirementDate}>
                    {getCurrentDate()}
                </span>

                {
                    /*
                        SOLICITANTE
                     */
                }


                <label className={styles.requestUser}>
                    Usuario solicitante
                </label>

                <span className={styles.requestUser}>
                    {props.data.requestUser}
                </span>

                <label className={styles.requestArea}>
                    Area
                </label>

                <span className={styles.requestArea}>
                    {props.data.requestArea}
                </span>

                <label className={styles.requestRole}>
                    Cargo
                </label>

                <span className={styles.requestRole}>
                    {props.data.requestRole}
                </span>


                {
                    /*
                    PREPARADO POR
                     */
                }

                <label className={styles.preparedByName}>
                    Preparado por
                </label>

                <span className={styles.preparedByName}>
                    {props.data.preparedByName}
                </span>

                <label className={styles.preparedByArea}>
                    Area
                </label>

                <span className={styles.preparedByArea}>
                    {props.data.preparedByArea}
                </span>

                <label className={styles.preparedByRole}>
                    Cargo
                </label>

                <span className={styles.preparedByRole}>
                    {props.data.preparedByRole}
                </span>


                {
                    /*
                       DERIVADO A
                     */
                }

                <label className={styles.derivedToName}>
                    Derivado a
                </label>

                <span className={styles.derivedToName}>
                    {props.data.derivedToName}
                </span>

                <label className={styles.derivedToArea}>
                    Area
                </label>

                <span className={styles.derivedToArea}>
                    {props.data.derivedToArea}
                </span>

                <label className={styles.derivedToRole}>
                    Cargo
                </label>

                <span className={styles.derivedToRole}>
                    {props.data.derivedToRole}
                </span>

                <label className={styles.requestDescription}>
                    Descripción
                </label>

                <span className={styles.requestDescription}>
                    {props.data.requestDescription}
                </span>

            </div>


        </div>
    )
});

export default RequestFile;
