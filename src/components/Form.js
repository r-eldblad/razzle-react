const Form = (props) => {
  const getInputHandler = (event) => {
    props.onGetInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} onChange={getInputHandler}>
        <label htmlFor="fname">Name: </label>
        <input type="text" name="fname"></input>
      </form>
    </div>
  );
};

export default Form;
