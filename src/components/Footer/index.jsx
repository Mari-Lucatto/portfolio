import React from 'react';
import style from './Footer.module.css';
const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div class="linha">
                    <footer>
                        <div class="coluna col12">
                            <span>&copy; 2023 - Mariana da Rosa Lucatto</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Footer;