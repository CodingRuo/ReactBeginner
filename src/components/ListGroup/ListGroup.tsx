import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${ props => props.active && 'blue' };
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
