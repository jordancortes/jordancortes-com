import { Button } from "../components/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export default function Home() {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const handleClick = () => {
    setDrawerVisibility(true);
  };

  const handleDrawerCloseClick = () => {
    setDrawerVisibility(false);
  };

  return (
    <div className="bg-ash-dark h-screen">
      <h1>Jordan Cortes</h1>
      <Button variant="primary" onClick={handleClick}>
        Hello World
      </Button>
      <Drawer open={drawerVisibility} onClose={handleDrawerCloseClick}>
        <List>
          <ListItem>
            <ListItemText>Prueba</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
