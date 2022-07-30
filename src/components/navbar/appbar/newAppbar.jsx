import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
//additional
import { navlinks } from "../../../assets/links/navlinks";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full md:hidden ">
      <BottomNavigation
        sx={{ width: "100%", backgroundColor: "#202020" }}
        value={value}
        onChange={handleChange}
      >
        {navlinks.map((link, key) => (
          <Link to={link.to}>
            <BottomNavigationAction
              key={key}
              label={link.name}
              value={link.name}
              icon={link.icon}
              sx={{ color: "#fff" }}
            />
          </Link>
        ))}
      </BottomNavigation>
    </div>
  );
}
