import React from "react";
import styles from "./Stepper.module.scss";
import type { StepperProps } from "./StepperProps";

const Stepper: React.FC<StepperProps> = (props) => {

    const divs = [];

    for (let i = 1; i <= props.totalSteps; i++) {
        divs.push(i);
    }

    return (
        <div className={styles.stepper}>
            {
                divs.map(i => (
                    <span
                        key={i}
                        onClick={() => i > 1 && props.change(i)}
                        className={props.step === i ? styles.activeStep : styles.step}
                    >
                        {i}
                    </span>
                ))
            }
        </div>
    )
};

export default Stepper;
