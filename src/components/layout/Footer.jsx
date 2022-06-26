import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import styles from "./Footer.module.css"

const Footer = () => {

    return (

        <footer className={styles.footer}>

            <div>

                <ul className={styles.social_list}>

                    <li className={styles.social_list_li}>  <FaFacebook /></li>
                    <li  className={styles.social_list_li}>  <FaInstagram /> </li>
                    <li  className={styles.social_list_li}>  <a href="https://www.linkedin.com/in/wesley-de-souza-4a0372157/"><FaLinkedin /></a></li>
                    <li  className={styles.social_list_li}>  <a href="https://github.com/wesley180320"><FaGithub /></a> </li>


                </ul>

                <p className={styles.copy_right}> <span>Costs</span> &copy; 2022 </p>

            </div>
        </footer>

    )

}

export default Footer;