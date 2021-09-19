import {
  Nav,
  ListsNav,
  Container,
  UserAvatar,
  AddButtons,
  UserControl,
  UserDetails,
  SeparatorLine,
  SearchControl,
  ListsGroupsNav,
} from "./SidebarStyles";
import Search from "@/common/icons/search.svg";
import { groups, lists, menuItems } from "./mock";
import { renderGroups, renderMenuItems, renderLists } from "./renders";
import NewListIcon from "@/common/icons/add.svg";
import NewGroupIcon from "@/common/icons/add-group.svg";

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

      <AddButtons>
        <button>
          <img src={NewListIcon} alt="New list" />
          <span>New list</span>
        </button>
        <button>
          <img src={NewGroupIcon} alt="New group" />
        </button>
      </AddButtons>
    </Container>
  );
}
