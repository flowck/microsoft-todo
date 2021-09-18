import Sun from "@/common/icons/sun.svg";
import User from "@/common/icons/user.svg";
import Home from "@/common/icons/home.svg";
import Favorite from "@/common/icons/favorite.svg";
import Calendar from "@/common/icons/calendar.svg";

export const menuItems = [
  { label: "My Day", icon: Sun, path: "/my-day" },
  { label: "Important", icon: Favorite, path: "/important" },
  { label: "Planned", icon: Calendar, path: "/planned" },
  { label: "Assigned to me", icon: User, path: "/assigned-to-me" },
  { label: "Tasks", icon: Home, path: "/tasks" },
];

export const groups = [
  {
    label: "University",
    name: "university",
    lists: [
      { label: "Math", name: "math", items: 2 },
      { label: "Software Engineering", name: "sw", items: 11 },
    ],
  },
  {
    label: "Travelling",
    name: "travelling",
    lists: [
      { label: "Spain", name: "spain", items: 1 },
      { label: "Switzerland", name: "swiss", items: 8 },
    ],
  },
];

export const lists = [
  { label: "School", name: "school", items: 5 },
  { label: "English Course", name: "encourse", items: 2 },
];
