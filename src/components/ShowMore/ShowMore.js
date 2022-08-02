import "./ShowMore.css";

function ShowMore({ handleLoader }) {
  return (
    <div className="show-more">
      <button className="show-more__button" onClick={handleLoader}>
        Ещё
      </button>
    </div>
  );
}

export default ShowMore;
