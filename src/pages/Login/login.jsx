import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./style.module.scss";
import { Box } from "@mui/material";
import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../Components/redux/Services/authServices";
import { useForm, Controller, useFormState } from "react-hook-form";
import { addStudentsDetails } from "../../Components/redux/reducers/authReducer";
import { useDispatch } from "react-redux";

const login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginRequest] = useUserLoginMutation();
  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (loginDetails) => {
    const { data, error } = await loginRequest({
      ...loginDetails,
    });
    if (data) {
      dispatch(addStudentsDetails(data));

      reset();
      navigate("/chat");
    }
  };
  return (
    <>
      <Box className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Box>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field cannot be empty",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please Enter Correct Email Id",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                  formState: { errors },
                }) => {
                  return (
                    <>
                      <TextField
                        className={styles.loginInput}
                        variant={"outlined"}
                        label={"Email"}
                        error={error}
                        helperText={error?.message}
                        onChange={onChange}
                        value={value}
                        sx={{ width: "100%" }}
                        InputProps={{
                          startAdornment: (
                            <FaUserLarge
                              style={{
                                color: "#14266A",
                                fontSize: "23",
                                marginRight: "8px",
                              }}
                            />
                          ),
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: "20px",
                            marginBottom: "10px",
                          },
                        }}
                      />
                    </>
                  );
                }}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field cannot be empty",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                  formState: { errors },
                }) => {
                  return (
                    <>
                      <TextField
                        className={styles.loginInput}
                        variant={"outlined"}
                        label={"Password"}
                        error={error}
                        helperText={error?.message}
                        onChange={onChange}
                        value={value}
                        sx={{ width: "100%" }}
                        InputProps={{
                          startAdornment: (
                            <RiLockPasswordFill
                              style={{
                                color: "#14266A",
                                fontSize: "23",
                                marginRight: "8px",
                              }}
                            />
                          ),
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: "20px",
                            marginBottom: "10px",
                          },
                        }}
                      />
                    </>
                  );
                }}
              />
            </Box>
          </div>
          <div>
            <Button
              type="submit"
              // onClick={UserLogedInHandle}
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
        </form>
      </Box>
    </>
  );
};

export default login;
