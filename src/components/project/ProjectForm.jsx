import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./ProjectForm.module.css"
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

const ProjectForm = ({ btnText }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {// Buscar os elementos da api
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json',
                  
            },
        })

        // promisses
        // Tranformar os dados em Json 
.then((resp) => resp.json())
        // Colocando os dados dentro da categoria   
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))

    }, [])
    return (


        // Formulario do NewProject
        <form className={styles.form}>

            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />

            <Input type="number" text="Orçamento do projeto" name="name" placeholder="Insira o orçamento do projeto" />

            <Select name="category_id" text="Selecione a categori" options={categories} />

            <SubmitButton text={btnText} />
        </form>


    )
}

export default ProjectForm