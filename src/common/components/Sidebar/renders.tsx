import {
  GroupLists,
  SidebarIcon,
  SidebarArrow,
  ListGroupsNavItem,
  ListGroupsNavClick,
} from "./SidebarStyles";
import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { List, Group } from "./interfaces";
import Arrow from "@/common/icons/arrow.svg";
import ListIcon from "@/common/icons/list.svg";
import GroupIcon from "@/common/icons/group.svg";

function formatLabel(label: string, max: number) {
  return label.length > max ? `${label.substring(0, 16)}...` : label;
}

export function renderMenuItems(items: Record<string, string>[]) {
  return items.map((item) => (
    <li key={item.label}>
      <NavLink activeClassName="nav--is-active" to={item.path}>
        <SidebarIcon src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </NavLink>
    </li>
  ));
}

export function renderLists(lists: List[]) {
  return lists.map((list) => (
    <li tabIndex={-1} key={list.name}>
      <SidebarIcon src={ListIcon} alt="list" />
      <span>{formatLabel(list.label, 19)}</span>
    </li>
  ));
}

export function renderGroups(groups: Group[]) {
  const showLists = ({ target }: MouseEvent) => {
    const listsEl = (target as HTMLElement)?.parentElement?.querySelector("ul");
    if (listsEl) {
      const { display } = window.getComputedStyle(listsEl);
      listsEl.style.display = display === "none" ? "block" : "none";
    }
  };

  return groups.map((group) => (
    <li key={group.name}>
      <ListGroupsNavClick onClickCapture={showLists} />
      <ListGroupsNavItem tabIndex={-1}>
        <SidebarIcon src={GroupIcon} alt="group" />
        <span>{formatLabel(group.label, 20)}</span>
        <SidebarArrow src={Arrow} alt="arrow" />
      </ListGroupsNavItem>

      {group.lists.length ? (
        <GroupLists>{renderLists(group.lists)}</GroupLists>
      ) : null}
    </li>
  ));
}
