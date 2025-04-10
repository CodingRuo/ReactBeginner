import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokio", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Test</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
