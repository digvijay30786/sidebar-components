import styled from "styled-components";
export default function Drawer({ children }) {
  const SideMenu = styled.div`
    width: 20%;
    height: 625px;
    border: 1px solid gray;
    padding-top: 70px;
  `;
  return <SideMenu>{children}</SideMenu>;
}
