import React, { TextareaHTMLAttributes } from "react";

import "./style.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} />
    </div>
  );
};

export default Textarea;
