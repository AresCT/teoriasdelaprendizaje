import React from 'react';
import '@fontsource/notable';      // Notable
import '@fontsource/delius';       // Delius
import '@fontsource/rouge-script'; // Rouge Script

const Header = ({
    colorTeorias = "#2868C6",
    colorDel = "#91D2F4",
    colorAprendizaje = "#CBA2EA",
    stretch = 1,
    stretchDel = 1,
    stretchAprendizaje = 3.5,
}) => {
    const styles = {
        header: {
            background: 'linear-gradient(135deg,rgb(16, 28, 41),rgb(29, 31, 90))',
            textAlign: 'center',
            padding: '2rem 1rem',
            borderBottomLeftRadius: '30px',
            borderBottomRightRadius: '30px',
            margin: '-12px 0 0 0',
            userSelect: 'none',
        },
        lineTop: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '0.5rem',
        },
        teorias: {
            fontFamily: "'Notable', sans-serif",
            fontSize: '6rem',
            textTransform: 'uppercase',
            margin: 0,
            color: colorTeorias,
            transform: `scaleX(${stretch})`,
            whiteSpace: 'nowrap',
        },
        del: {
            fontFamily: "'Delius', cursive",
            fontSize: '2.5rem',
            margin: '1.1rem',
            color: colorDel,
            transform: `scaleX(${stretchDel})`,
            whiteSpace: 'nowrap',
            alignSelf: 'flex-end',
        },
        aprendizaje: {
            fontFamily: "'Rouge Script', cursive",
            fontSize: '4rem',
            margin: '-2.8rem 0 0',
            color: colorAprendizaje,
            transform: `scaleX(${stretchAprendizaje})`,
            whiteSpace: 'nowrap',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.lineTop}>
                <h1 style={styles.teorias}>TEORÍAS</h1>
                <h2 style={styles.del}>del</h2>
            </div>
            <h3 style={styles.aprendizaje}>aprendizaje</h3>
        </header>
    );
};

export default Header;
