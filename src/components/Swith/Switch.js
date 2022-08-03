import "./Switch.css";

function Switch({ handleCheckboxChange }) {
  return (
    <>
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={handleCheckboxChange} />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Switch;
