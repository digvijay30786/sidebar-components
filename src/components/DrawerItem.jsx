import styled from "styled-components";
export default function DrawerItem(props) {
  const Nav = styled.div`
    display: flex;
    column-gap: 15px;
    padding: 20px;
    box-sizing: border-box;
    div > p {
      font-size: 20px;
      font-family: sans-serif;
    }
  `;
  return (
    <Nav>
      <div>
        <img src={props.icon} alt="asd" height="25px" />
      </div>
      <div>
        <p>{props.label}</p>
      </div>
    </Nav>
  );
}
