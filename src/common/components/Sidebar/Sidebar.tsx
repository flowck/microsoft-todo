import {
  Nav,
  ListsNav,
  Container,
  SeparatorLine,
  SearchControl,
  ListsGroupsNav,
  UserAvatar,
  UserControl,
  UserDetails,
} from "./SidebarStyles";
import Search from "@/common/icons/search.svg";
import { groups, lists, menuItems } from "./mock";
import { renderGroups, renderMenuItems, renderLists } from "./renders";

export function Sidebar() {
  return (
    <Container>
      <UserControl>
        <UserAvatar>FC</UserAvatar>
        <UserDetails>
          <span>Firmino Changani</span>
          <span>firmino.changani@gmail.com</span>
        </UserDetails>
      </UserControl>

      <SearchControl>
        <img src={Search} alt="Search" />
        <input type="text" placeholder="Search" />
      </SearchControl>

      <Nav>
        <ul>{renderMenuItems(menuItems)}</ul>
      </Nav>

      <SeparatorLine />

      <ListsGroupsNav>
        <ul>{renderGroups(groups)}</ul>
      </ListsGroupsNav>

      <ListsNav>
        <ul>{renderLists(lists)}</ul>
      </ListsNav>
    </Container>
  );
}
