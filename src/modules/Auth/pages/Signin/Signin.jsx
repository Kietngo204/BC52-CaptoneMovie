import React from "react";
import { BackGroundSign, Error } from "../Signup/styleError";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ButtonMovie } from "../../../../components/ButtonMovie";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../../../../apis/userAPI";
import Loading from "../../../../components/Loading";
import { useUserContext } from "../../../../contexts/UserContext/UserContext";

const signinSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string().required("Mật khẩu không được để trống"),
});

export default function Signin() {
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(signinSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: (data) => {
      onSigninSuccess(data);
    },
  });

  const onSubmit = (values) => {
    // Gọi API đăng ký
    handleSignin(values);
  };

  // currentUser khác null => user đã đăng nhập => điều hướng về home
  if (currentUser) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/"} replace />;
  }

  const onError = (errors) => {
    console.log(errors);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BackGroundSign>
      <Container
        sx={{ backgroundColor: "white", pb: 2, pt: 1, borderRadius: 2 }}
        maxWidth="xs"
      >
        <Typography align="center" variant="h4" component="h2">
          Đăng nhập
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 1, mb: 1 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <TextField
            fullWidth
            error={!!errors.taiKhoan}
            label="Tài khoản"
            color="error"
            helperText={errors.taiKhoan?.message}
            {...register("taiKhoan")}
          />

          <TextField
            fullWidth
            error={!!errors.matKhau}
            label="Mật khẩu"
            color="error"
            type="password"
            helperText={errors.matKhau?.message}
            {...register("matKhau")}
          />

          <ButtonMovie
            disabled={isLoading}
            width="100%"
            height="56px"
            type="submit"
          >
            Đăng nhập
          </ButtonMovie>

          {error && <Error>{error}</Error>}
        </Box>
        <Link style={{ margin: "10px" }} to={"/signup"}>
          Bạn chưa có tài khoản ? Đăng kí
        </Link>
      </Container>
    </BackGroundSign>
  );
}
