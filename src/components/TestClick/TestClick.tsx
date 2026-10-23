import css from "./TestClick.module.css";

const TestClick = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("click", e.target);
  };

  const handleDelete = () => {
    console.log("handleDelete");
  };
  const handleUpdate = () => {
    console.log("handleUpdate");
  };
  const handleCreate = () => {
    console.log("handleCreate");
  };

  return (
    <div className={css["testClick"]}>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleCreate}>Create</button>

      <p onClick={(e) => console.log("Test", e)}>Test</p>

      <input type="text" onFocus={(e) => console.log("FOCUS", e)} />
    </div>
  );
};

export default TestClick;
