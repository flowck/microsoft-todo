import styled from "styled-components";

export const Container = styled.aside`
  top: 0;
  left: 0;
  width: 195px;
  height: 100%;
  padding: 14px 0;
  position: fixed;
  font-size: 14px;
  background-color: #2e2c31;
`;

export const UserControl = styled.div`
  color: #fff;
  display: flex;
  padding: 0 14px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const UserAvatar = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  font-size: 11px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #00656d;
`;
export const UserDetails = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: calc(100% - 38px);

  span:first-child {
    font-size: 14px;
  }

  span:last-child {
    font-size: 12px;
    color: #818081;
  }
`;

export const Nav = styled.nav`
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

export const SearchControl = styled.div`
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
    position: relative;

    ul {
      display: none;
    }
  }
`;

export const ListGroupsNavItem = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 0 14px 0 22px;
  z-index: 1;
  position: relative;

  &:focus {
    background-color: #464045;
  }

  img,
  span {
    z-index: 0;
    position: relative;
  }

  span {
    flex-grow: 1;
  }
`;

export const ListGroupsNavClick = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 28px;
  cursor: pointer;
  position: absolute;
`;

export const GroupLists = styled.ul`
  margin: 5px 0;

  li {
    height: 28px;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 14px 0 36px;

    &:focus {
      background-color: #464045;
    }
  }
`;

export const SeparatorLine = styled.hr`
  border: none;
  height: 0.6px;
  width: calc(100% - 28px);
  margin: 0 auto 10px auto;
  background-color: #484447;
`;

export const ListsNav = styled(GroupLists)`
  li {
    color: #fff;
    padding: 0 14px 0 22px;
  }
`;

export const AddButtons = styled.div`
  width: 100%;
  bottom: 14px;
  display: flex;
  padding: 0 14px;
  position: absolute;
  justify-content: space-between;

  button {
    border: none;
    display: flex;
    color: #fff;
    cursor: pointer;
    background-color: transparent;

    span {
      margin-left: 14px;
    }

    img {
      width: 14px;
    }
  }
`;
