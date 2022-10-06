import { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material";
import BaseLabelTextField from "../../components/Base/BaseLabelTextField";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthApi from "../../apis/auth";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(8, "至少輸入8個字元")
    .matches(/^[A-Za-z0-9]+$/, "只能輸入大小寫英文字母與數字")
    .required("請輸入帳號"),
  password: yup
    .string()
    .min(8, "至少輸入8個字元")
    .matches(/^[A-Za-z0-9]+$/, "只能輸入大小寫英文字母與數字")
    .required("請輸入密碼"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await AuthApi.login(values);
      console.log(res);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant={"h2"} className={"text-4xl font-bold mb-4"}>
        Login
      </Typography>
      <BaseLabelTextField
        id={"username"}
        label={"帳號"}
        autoComplete={"off"}
        error={formik.touched.username && !!formik.errors.username}
        helperText={formik.touched.username && formik.errors.username}
        {...formik.getFieldProps("username")}
      />
      <BaseLabelTextField
        id={"password"}
        label={"密碼"}
        type={"password"}
        autoComplete={"off"}
        error={formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
        {...formik.getFieldProps("password")}
      />
      <Button type={"submit"} fullWidth>
        登入
      </Button>
    </form>
  );
};

const Login: NextPage = () => {
  return (
    <div className={"flex w-full h-screen justify-center items-center"}>
      <Box className={'w-[400px]'}>
        <LoginForm />
      </Box>
    </div>
  );
};

export default Login;
