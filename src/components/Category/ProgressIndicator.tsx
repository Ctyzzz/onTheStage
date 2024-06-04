import React from 'react';
import classNames from 'classnames';
import styles from './ProgressIndicator.module.scss';

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  return (
    <div className={styles.progressIndicator}>
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={classNames(styles.progressItem, {
            [styles.active]: step === progress,
          })}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;