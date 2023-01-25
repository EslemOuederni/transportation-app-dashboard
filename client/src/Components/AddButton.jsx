function AddButton({ handleClick, name }) {
  return (
    <div>
      <button
        className=" bg-blue-700 rounded-md px-4 py-2 text-white font-semibold mb-4"
        onClick={handleClick}
      >
        Add a new {name}
      </button>
    </div>
  );
}

export default AddButton;
