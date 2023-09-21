import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { ButtonMovie } from "../../../../components/ButtonMovie";
import { BackGroundSign, Error } from "./styleError";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { signup } from "../../../../apis/userAPI";
import { useNavigate } from "react-router-dom";

const signupSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
    ),
  email: string()
    .required("Email không được để trống")
    .email("Email không đúng định dạng"),
  hoTen: string().required("Họ tên không được để trống"),
  soDt: string()
    .required("Số điện thoại không được để trống")
    .matches(/^(0[1-9][0-9]{8})$/, "Số điện thoại không đúng"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignup,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (payload) => signup(payload),
    onSuccess: () => {
      navigate("/signin");
    },
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    // Gọi API đăng ký
    handleSignup(values);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <BackGroundSign>
      <Container
        sx={{ backgroundColor: "white", pb: 2, pt: 1, borderRadius: 2 }}
        maxWidth="xs"
      >
        <Typography align="center" variant="h4" component="h2">
          Đăng kí
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

          <TextField
            fullWidth
            error={!!errors.email}
            label="Email"
            color="error"
            helperText={errors.email?.message}
            {...register("email")}
          />

          <TextField
            fullWidth
            error={!!errors.hoTen}
            label="Họ tên"
            color="error"
            helperText={errors.hoTen?.message}
            {...register("hoTen")}
          />

          <TextField
            fullWidth
            error={!!errors.soDt}
            label="Số điện thoại"
            color="error"
            type="number"
            helperText={errors.soDt?.message}
            {...register("soDt")}
          />
          <ButtonMovie
            disabled={isLoading}
            width="100%"
            height="56px"
            type="submit"
          >
            Đăng ký
          </ButtonMovie>

          {error && <Error>{error}</Error>}
        </Box>
        <Link style={{ margin: "10px" }} to={"/signin"}>
          Bạn đã có tài khoản ? Đăng nhập
        </Link>
      </Container>
    </BackGroundSign>
  );
}
