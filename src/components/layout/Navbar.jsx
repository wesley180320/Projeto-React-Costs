import React from "react"
import { Link } from "react-router-dom";

import Container from "./Container";
import styles from "./Navbar.module.css"

import logo from "../../img/costs_logo.png"

const NavBar = () => {


    return (

        <nav className={styles.navbar}>
            <Container>
            <Link to={"/"}> <img src={logo} alt="Costs" /></Link>

                <ul className={styles.list}>
                    <li className={styles.item}> <Link to={"/"} className={styles.item_a}>Home</Link></li>
                    <li className={styles.item}><Link to={"/newproject"} className={styles.item_a}> Novo Project </Link></li>
                    <li className={styles.item}><Link to={"/company"} className={styles.item_a}> Empresa </Link></li>
                    <li className={styles.item}><Link to={"/projects"} className={styles.item_a}> Projetos </Link></li>
                    <li className={styles.item}><Link to={"/contato"} className={styles.item_a}> Contato </Link></li>

                </ul>

            </Container>
        </nav>

    )

}

export default NavBar;