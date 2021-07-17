import "./styles.css";
import styled from "styled-components";
import Drawer from "./components/sidebar";
import DrawerItem from "./components/DrawerItem";

export default function App() {
  const LineBreak = styled.hr``;
  return (
    <Drawer>
      <LineBreak />
      <DrawerItem label="Inbox" icon="https://i.imgur.com/40jcn4S.png" />
      <DrawerItem label="Starred" icon="https://i.imgur.com/noclhax.png" />
      <DrawerItem label="Send Email" icon="https://i.imgur.com/7RwRo0u.png" />
      <DrawerItem label="Drafts" icon="https://i.imgur.com/c0nlgNB.png" />
      <LineBreak />
      <DrawerItem label="All mail" icon="https://i.imgur.com/iL4ckoP.png" />
      <DrawerItem label="Trash" icon="https://i.imgur.com/pDPMg5V.png" />
      <LineBreak />
    </Drawer>
  );
}
