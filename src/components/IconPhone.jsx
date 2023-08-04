import React from 'react';
import styles from './IconPhone.module.scss'

function IconPhone() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <svg width="33" height="52" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2799 40.4H16.5199M6.8 2H26C28.651 2 30.8 4.14903 30.8 6.8V45.2C30.8 47.851 28.651 50 26 50H6.8C4.14903 50 2 47.851 2 45.2V6.8C2 4.14903 4.14903 2 6.8 2Z" stroke="url(#paint0_linear_913_321)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_913_321" x1="2" y1="-14.5" x2="31" y2="68" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BD1CC9" />
                        <stop offset="1" stop-color="#0C74EF" />
                    </linearGradient>
                </defs>
            </svg>

        </svg>
    )
}

export default IconPhone;