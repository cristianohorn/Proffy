import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-VtjzgaojKl0NQHRiqgYfYvZHUSYSqJW2a2I8f=s83-c-mo"
          alt=""
        />
        <div>
          <strong>Cristiano Horn</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industp
        into electronic typesetting, remaining essentially unchanged.
        <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ip Ipsum.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatasapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
