import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(2);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 border-r-2 border-gray-100">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Menu
        </Typography>
      </div>
      <List>
        <NavLink to={'/catalog'} className={({ isActive }) => (isActive ? setActive(1) : null)}>
          <ListItem selected={active == 1 ? true : false}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Catalog
          </ListItem>
        </NavLink>
        <NavLink to='/order' className={({ isActive }) => (isActive ? setActive(2) : null)}>
          <ListItem selected={active == 2 ? true : false}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Order
          </ListItem>
        </NavLink>
        <NavLink to={'/inbox'} className={({ isActive }) => (isActive ? setActive(3) : null)}>
          <ListItem selected={active == 3 ? true : false}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </NavLink>
        <NavLink to={'/profile'} className={({ isActive }) => (isActive ? setActive(4) : null)}>
          <ListItem selected={active == 4 ? true : false}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </NavLink>


      </List>
    </Card>
  );
}