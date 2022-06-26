import React from "react";
import Savings from "../../img/savings.svg"
import styles from "./Home.module.css"

const Home = () => {

    return (

        <section className={styles.home}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerencias seus projetos</p>
            <img src={Savings}/>

        </section>

    )

}

export default Home;