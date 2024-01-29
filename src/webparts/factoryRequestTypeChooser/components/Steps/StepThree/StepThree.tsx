import React, {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import {StepThreeProps} from "./StepThreeProps";
import styles from "./StepThree.module.scss";
import RequestFile from "../../RequestFile/RequestFile";

const StepThree: React.FC<StepThreeProps> = (props) => {

    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <div className={styles.wrapper}>

            <RequestFile
                ref={componentRef}
                data={props.data}
            />

            <div className={styles.buttonWrapper}>
                <button onClick={handlePrint}>Guardar PDF</button>
            </div>

        </div>
    )


};

export default StepThree;
