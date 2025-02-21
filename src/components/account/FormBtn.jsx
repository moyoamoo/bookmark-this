

const FormBtn = ({ type, className, text, func }) => {
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={() => {
          func && func();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default FormBtn;
