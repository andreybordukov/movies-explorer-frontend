import "./Switch.css";

function Switch() {
  return (
    <>
      <label class="switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
    </>
  );
}

export default Switch;
