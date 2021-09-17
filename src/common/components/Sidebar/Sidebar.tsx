import Sun from "@/common/icons/sun.svg";
import User from "@/common/icons/user.svg";
import Home from "@/common/icons/home.svg";
import { NavLink } from "react-router-dom";
import Group from "@/common/icons/group.svg";
import Arrow from "@/common/icons/arrow.svg";
import Search from "@/common/icons/search.svg";
import Favorite from "@/common/icons/favorite.svg";
import Calendar from "@/common/icons/calendar.svg";
import List from "@/common/icons/list.svg";
import {
  SidebarNav,
  SidebarContainer,
  SidebarSearch,
  SidebarIcon,
  SidebarArrow,
  ListsGroupsNav,
  GroupLists,
  ListGroupsNavItem,
} from "./SidebarStyles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarSearch>
        <img src={Search} alt="Search" />
        <input type="text" placeholder="Search" />
      </SidebarSearch>
      <SidebarNav>
        <ul>
          <li>
            <NavLink activeClassName="nav--is-active" to="/my-day">
              <SidebarIcon src={Sun} alt="My Day" />
              <span>My Day</span>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="nav--is-active" to="/important">
              <SidebarIcon src={Favorite} alt="Important" />
              <span>Important</span>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="nav--is-active" to="/planned">
              <SidebarIcon src={Calendar} alt="Planned" />
              <span>Planned</span>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="nav--is-active" to="/assigned-to-me">
              <SidebarIcon src={User} alt="Assigned to me" />
              <span>Assigned to me</span>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="nav--is-active" to="/tasks">
              <SidebarIcon src={Home} alt="Tasks" />
              <span>Tasks</span>
            </NavLink>
          </li>
        </ul>
      </SidebarNav>

      <ListsGroupsNav>
        <ul>
          <li tabIndex={-1}>
            <ListGroupsNavItem>
              <SidebarIcon src={Group} alt="group" />
              <span>School</span>
              <SidebarArrow src={Arrow} alt="arrow" />
            </ListGroupsNavItem>
            <GroupLists>
              <li>
                <SidebarIcon src={List} alt="list" />
                <span>School</span>
              </li>
            </GroupLists>
          </li>

          <li tabIndex={-1}>
            <ListGroupsNavItem>
              <SidebarIcon src={Group} alt="group" />
              <span>School</span>
              <SidebarArrow src={Arrow} alt="arrow" />
            </ListGroupsNavItem>
          </li>
        </ul>
      </ListsGroupsNav>
    </SidebarContainer>
  );
}
