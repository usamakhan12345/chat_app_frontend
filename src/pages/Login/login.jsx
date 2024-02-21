import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./style.module.scss";
import { Box } from "@mui/material";
import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const login = () => {
  const navigate = useNavigate();
  const UserLogedInHandle = () => {
    navigate("/chat");
  };

  return (
    <>
      <Box className={styles.loginContainer}>
        <div>
          <Box>
            <TextField
              className={styles.loginInput}
              variant={"outlined"}
              label={"Email"}
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <FaUserLarge
                    style={{
                      color: "#14266A",
                      fontSize: "23",
                      marginRight: "8px",
                    }} // Customize the icon color
                  />
                ),
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px", // Adjust the font size as needed
                  marginBottom: "10px",
                },
              }}
            />
            <TextField
              className={styles.loginInput}
              variant={"outlined"}
              label={"Password"}
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <RiLockPasswordFill
                    style={{
                      color: "#14266A",
                      fontSize: "23",
                      marginRight: "8px",
                    }} // Customize the icon color
                  />
                ),
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px", // Adjust the font size as needed
                  marginBottom: "10px",
                },
              }}
            />
          </Box>
        </div>
        <div>
          <Button
            onClick={UserLogedInHandle}
            sx={{
              width: "100%",
              backgroundColor: "#172B74",
              color: "#fff",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Log in
          </Button>
        </div>
      </Box>
    </>
  );
};

export default login;
