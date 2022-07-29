import "./Switch.css";

function Switch() {
  return (
    <>
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Switch;
