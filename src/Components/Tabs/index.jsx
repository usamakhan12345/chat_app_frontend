import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginComponent from "../../pages/Login/login";
import SignUp from "../../pages/Sign Up/index";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabStyle = (index, value) => ({
    width: "50%",
    fontWeight: "bold",
    backgroundColor: value === index ? "#14266A" : "transparent",
    color: value === index ? "white" : "#14266A",
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* <Tab sx={{width : '50%', color : value === 0 ? '#fff' : '#14266A'  , fontWeight : 'bold'  , backgroundColor : value === 0 ? '#14266A' : ''}} label="Login" {...a11yProps(0)} />
          <Tab sx={{width : '50%' , backgroundColor : value ===1 ? '#14266A'  : 'transparent', color : value === 1 ? '#fff' : '#fff'  , fontWeight : 'bold'}} label="Sign Up" {...a11yProps(1)} /> */}
          <Tab sx={tabStyle(0, value)} label="Login" {...a11yProps(0)} />
          <Tab sx={tabStyle(1, value)} label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoginComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SignUp />
      </CustomTabPanel>
    </Box>
  );
}
