import React from 'react';

const Navbar = (props) => {
   return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} 
                src="data:image/png;base64,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" 
                alt="cart"/>
                <span style={styles.cartCount}>{ props.count }</span>
            </div>
        </div>
   )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267B2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        paddingRight: '10px'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        marginRight: '10px',
        position: 'absolute',
        right: 0,
        top: -9 
    }
};

export default Navbar;