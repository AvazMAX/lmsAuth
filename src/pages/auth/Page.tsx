import React, { FC } from "react";
import { styled } from "@mui/material";
import authPageImage from "../../assets/images/forauthpage.webp";

interface PageProps {
    children: any;
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <ContainerStyled>
      <img src={authPageImage} alt="authpage" />
      <div>
        <main>{children}</main>
      </div>
    </ContainerStyled>
  );
};
const ContainerStyled = styled("div")`
  display: flex;
  img {
    height: 100vh;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
