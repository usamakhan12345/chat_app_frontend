import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./style.module.scss";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { signUpConstants } from "../../Components/Contants/index";
import { useForm, Controller, useFormState } from "react-hook-form";
const signup = () => {
  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (loginDetails) => {
    console.log("loginDetails", loginDetails);
  };
  console.log("signUpConstants", signUpConstants);
  return (
    <Box className={styles.signUpContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Box>
            {signUpConstants.length > 0 &&
              signUpConstants?.map((inputItem, index) => (
                <Controller
                  name={`${inputItem.name}`}
                  control={control}
                  rules={inputItem.rules}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState: { errors },
                  }) => {
                    return (
                      <>
                        <TextField
                          key={index}
                          className={styles[inputItem.className ?? "test"]}
                          variant={"outlined"}
                          label={`${inputItem.label ?? "test"}`}
                          sx={{ width: "100%" }}
                          onChange={onChange}
                          value={value}
                          helperText={error?.message}
                          error={error}
                          InputProps={{
                            startAdornment: (
                              <inputItem.icon
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
                      </>
                    );
                  }}
                />
              ))}
          </Box>
        </div>
        <div>
          <Button
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: "#172B74",
              color: "#fff",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default signup;
