import React from "react";

import { StyledFooter, ItemIcon } from "./styles";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <ItemIcon>
        <FaFacebookF color="#363636" size={30} />
      </ItemIcon>
      <ItemIcon>
        <FaInstagram color="#363636" size={30} />
      </ItemIcon>
      <ItemIcon>
        <FaTwitter color="#363636" size={30} />
      </ItemIcon>
      <ItemIcon>
        <FaLinkedinIn color="#363636" size={30} />
      </ItemIcon>
      <ItemIcon>
        <FaYoutube color="#363636" size={30} />
      </ItemIcon>
    </StyledFooter>
  );
}
