import React from "react";
import Savings from "../../img/savings.svg"
import styles from "./Home.module.css"

const Home = () => {

    return (

        <section className={styles.home}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos</p>
            <img src={Savings} alt="savings" />

        </section>


    
    )

}

export default Home;
