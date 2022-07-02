import React, { useEffect, useState } from "react";
import styles from "./Message.module.css";

const Message = ({ type, msg }) => {

    const [visible, setVisible] = useState(false);

  // Não tem menssagem visibilidade falsa não exibe nada.
  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    // Tem menssagem visibilidade true exibe menssagem.
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer)

  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
};

export default Message;
