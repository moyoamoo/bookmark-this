const FormInput = ({ className, type, name, text, errors, value }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} value={value && value} />
      <p>{errors && errors[name]}</p>
    </>
  );
};

export default FormInput;
