function AddButton({ handleClick, name }) {
  return (
    <div>
      <button
        className=" bg-secondary rounded-md px-4 py-2 text-primary hover:bg-primary hover:text-secondary font-semibold mb-4"
        onClick={handleClick}
      >
        Add a new {name}
      </button>
    </div>
  );
}

export default AddButton;
