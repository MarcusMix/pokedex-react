import { useNavigate } from "react-router-dom";

// icons
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdHome } from "react-icons/md";

// components
import * as Styles from "../Header/header.styles";
import { Container } from "../Container/container";
import { FlexBox } from "../Flexbox/flexbox";

// ::
const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Styles.HeaderContainer
        onClick={() => navigate("/")}
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <Styles.HeaderItem>
          <MdHome size="20" />
        </Styles.HeaderItem>
        <div>
          <FlexBox align="center" justify="flex-end" direction="row" gap="xxxs">
            <a
              target="_blank"
              href="https://github.com/MarcusMix"
              rel="noreferrer"
            >
              <Styles.HeaderItem>
                <BsGithub size="20" />
              </Styles.HeaderItem>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marcus-sandi/"
              rel="noreferrer"
            >
              <Styles.HeaderItem>
                <BsLinkedin size="20" />
              </Styles.HeaderItem>
            </a>
          </FlexBox>
        </div>
      </Styles.HeaderContainer>
    </Container>
  );
};

export default Header;