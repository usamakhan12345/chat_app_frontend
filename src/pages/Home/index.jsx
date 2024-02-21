import { Box } from '@mui/material'
import React from 'react'
import styles from "./style.module.scss"
import Tabs from "../../Components/Tabs/index"
const signup = () => {
  return (
    <>
    <Box className={styles.signUpwraper}>
        <Box className={styles.signupContainer}>
            <Tabs/>

        </Box>

    </Box>
    </>
  )
}

export default signup