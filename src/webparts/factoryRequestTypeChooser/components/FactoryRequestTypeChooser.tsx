import React from 'react';
import styles from './FactoryRequestTypeChooser.module.scss';
import type {IFactoryRequestTypeChooserProps} from './IFactoryRequestTypeChooserProps';

const FactoryRequestTypeChooser: React.FC<IFactoryRequestTypeChooserProps> = (props) => {


    return (
        <section className={`${styles.chooserWrapper}`}>
            <div className={styles.chooser}>
                <h2>Elige el tipo de solicitud que deseas hacer</h2>

                <div>
                    {
                        // TODO: Aqui una lista de las opciones de desarrollo: Component, Portal Web, Modificación de base de datos, otro
                    }

                </div>


            </div>
        </section>
    );
};

export default FactoryRequestTypeChooser;
