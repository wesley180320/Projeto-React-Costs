import React from "react";
import styles from "./ProjectForm.module.css"
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

const ProjectForm = ({btnText}) => {

    return (


        // Formulario do NewProject
        <form className={styles.form}>

            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />

            <Input type="number" text="Orçamento do projeto" name="name" placeholder="Insira o orçamento do projeto" />

            <Select name="category_id" text="Selecione a categoria"/>

            <SubmitButton text={btnText}/>
        </form>


    )
}

export default ProjectForm