import * as React from 'react';
import styles from './FactoryCover.module.scss';
import {IFactoryCoverProps} from "./IFactoryCoverProps";

export default class FactoryCover extends React.Component<IFactoryCoverProps, {}> {
  public render(): React.ReactElement<IFactoryCoverProps> {

      return (
      <section className={`${styles.wrapper}`}>
        <div className={styles.cover}>

            <div className={styles.logo}>
                <h1>Bienvenido a la</h1>
                <img src={require('../assets/logo.png')} alt=""/>
            </div>

            <div className={styles.coverBackground}></div>
        </div>
      </section>
    );
  }
}
