import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoNewIcon, LogoWithTextNewIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .desktop-icon {
    padding-left: 10px;
    width: 160px;
    display: block;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoNewIcon className="mobile-icon" />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="PlayCenter">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="PlayCenter">
          {innerLogo}
        </StyledLink>
      )}
      <div
        style={{
          color: "#F4EEFF",
          fontWeight: 700,
          fontSize: "32px",
          marginLeft: "10px",
        }}
      >
        PlayCenter
      </div>
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
