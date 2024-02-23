import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import styles from './style.module.scss'
import { CiLogout } from "react-icons/ci";

export default function TemporaryDrawer() {

   return (
    <div>
      <Drawer
        open={true}
        className={styles.DrawerContainer}
        variant='permanent'
      >
        <Box
          sx={{height : '100vh' , width : '360px' , backgroundColor : '#8D8F8E'}}
        //   role="presentation"
        >   
            <CiLogout className={styles.logOutIcon}/>
            <h3 className={styles.heading}>Chat App</h3>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
