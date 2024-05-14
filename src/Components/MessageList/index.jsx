import { Box } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";
import DoneIcon from "@mui/icons-material/Done";
const MessageList = ({ allMessages }) => {
  console.log("allMessages->", allMessages);

  return (
    <>
      <Box>
        <ul className={styles.listHead}>
          {Array.isArray(allMessages) &&
            allMessages.map((value, index) => (
              <>
                <li className={styles.listItem}>
                  {value} <span className={styles.messageTime}>9:00 PM</span>
                  <span>
                    {" "}
                    <DoneIcon className={styles.tickIcon} />{" "}
                  </span>{" "}
                </li>
              </>
            ))}
          {/* <li className={styles.listItemLeft}>test test testdddddddddddddddd</li> */}
        </ul>
      </Box>
    </>
  );
};

export default MessageList;
