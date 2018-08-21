import React from "react";
import {StyleSheet, css} from 'aphrodite/no-important';

const Spinner = () => {
    return (
        <div className={css(styles.spinner)}>
            <div className={css(styles.doubleBounce1)}/>
            <div className={css(styles.doubleBounce2)}/>
        </div>
    )
};
export default Spinner;

const bounceKeyframes = {
    '0%,100%': {
        transform: 'scale(0)',
    },

    '50%': {
        transform: 'scale(1)',
    }
};

const styles = StyleSheet.create({
    spinner: {
        margin: 'auto auto',
        position: 'relative',
        height: '100px',
        width: '100px',
    },
    doubleBounce1: {
        // animation: bounceKeyframes + ' 2s infinite ease-in-out',
        animationName: bounceKeyframes,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        backgroundColor: '#3ca8ff',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        opacity: 0.6,
        position: 'absolute',
    },
    doubleBounce2: {
        animationName: bounceKeyframes,
        animationDelay: '-1s',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        backgroundColor: '#3ca8ff',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        opacity: 0.6,
        position: 'absolute'
    },
});
