import React from 'react';

const Navbar = (props) => {
   return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} 
                src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1613931552~hmac=a59b72fc7cb020a9b354100ffe36aab8" 
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