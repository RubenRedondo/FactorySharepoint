import React, {useState} from 'react';
import styles from './FactoryRequestTypeChooser.module.scss';
import type {IFactoryRequestTypeChooserProps} from './IFactoryRequestTypeChooserProps';
import StepTwo from "./Steps/StepTwo"
import Stepper from "../../../components/Stepper/Stepper";

const FactoryRequestTypeChooser: React.FC<IFactoryRequestTypeChooserProps> = (props) => {

    const [requestType, setRequestType] = useState("COMPONENTE");
    const [step, setStep] = useState(1);

    const handleRequestType = (type: string) => {
        setRequestType(type)
    }

    const handleStepChange = (newStep: number) => {
        setStep(newStep)
    }

    const onSuccess = () => {
        console.log("ready")
    }

    console.log(requestType)

    return (
        <section className={`${styles.chooserWrapper}`}>

            <Stepper step={step} totalSteps={3} />

            {
                step === 1 && (
                    <div className={styles.chooser}>
                        <h2>Elige el tipo de solicitud que deseas hacer</h2>

                        <div className={styles.chooserList}>
                            <button className={requestType === 'COMPONENTE' ? styles.selected : undefined } onClick={() => handleRequestType('COMPONENTE')}>Componente</button>
                            <button className={requestType === 'PORTAL_WEB' ? styles.selected : undefined } onClick={() => handleRequestType('PORTAL_WEB')}>Portal Web</button>
                            <button className={requestType === 'MODIFICACION_BD' ? styles.selected : undefined }onClick={() => handleRequestType('MODIFICACION_BD')}>Modificación de base de datos</button>
                            <button className={styles.continueBtn} onClick={() => handleStepChange(1+1)} >CONTINUAR</button>
                        </div>
                    </div>
                )
            }

            {
                step === 2 && (
                    <StepTwo onSuccess={onSuccess} />
                )
            }


        </section>
    );
};

export default FactoryRequestTypeChooser;
