import React from "react";
import styled from "styled-components";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const StyledFooter = styled.div`
  background-color: var(--color-secondary);
`;
const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyRight = styled.p`
  color: var(--color-primary);
  font-size: 15px;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <CopyRight>© 2021 XpeedStudio All Rights Reserved</CopyRight>
        <SocialLinks>
          <li>
            <FaLinkedinIn color=" var(--color-primary)" />
          </li>

          <li>
            <FaGithub color=" var(--color-primary)" />
          </li>
          <li>
            <FaInstagram color=" var(--color-primary)" />
          </li>
          <li>
            <FaFacebookF color=" var(--color-primary)" />
          </li>
        </SocialLinks>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
