import styled from "styled-components";

export const SidebarContainer = styled.aside`
  top: 0;
  left: 0;
  width: 195px;
  height: 100%;
  padding: 14px 0;
  position: fixed;
  font-size: 14px;
  background-color: #2e2c31;
`;

export const SidebarNav = styled.nav`
  margin: 10px 0;

  ul {
    list-style: none;

    li {
      height: 28px;
      color: #fff;
      display: flex;
      cursor: pointer;
      align-items: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        color: #fff;
        padding-left: 22px;
        align-items: center;
        text-decoration: none;

        &.nav--is-active {
          background-color: #2c272b;

          &:focus {
            background-color: #464045;
          }
        }
      }
    }
  }
`;

export const SidebarSearch = styled.div`
  display: flex;
  padding: 0 14px;
  position: relative;
  align-items: center;

  img {
    left: 22px;
    width: 12px;
    height: 12px;
    position: absolute;
  }

  input {
    width: 100%;
    height: 23px;
    border: none;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #666;
    padding: 2px 5px 2px 30px;
    background-color: #3c373b;
  }
`;

export const SidebarIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const SidebarArrow = styled.img`
  width: 10px;
  height: 10px;
`;

export const ListsGroupsNav = styled.nav`
  li {
    color: #fff;
    display: block;
    min-height: 28px;
    position: relative;
    padding: 0 14px 0 22px;

    &:focus {
      background-color: #464045;
    }
  }
`;

export const ListGroupsNavItem = styled.div`
  display: flex;
  align-items: center;

  span {
    flex-grow: 1;
  }
`;

export const GroupLists = styled.ul`
  margin: 5px 0;

  li {
    display: flex;
    align-items: center;
  }
`;
