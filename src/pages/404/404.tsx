import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Container, FlexBox, PokedexView } from "../../components/components";
import { ButtonBack } from './404.styles'

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FlexBox align="center" justify="center" direction="row">
        <img
          alt="Pokemon gengar gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
        />
        <img
          alt="Pokemon haunter gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif"
        />
        <img
          alt="Pokemon gastly gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif"
        />
      </FlexBox>
      <PokedexView align="center" justify="center" direction="column">
        <h3>Página não encontrada.</h3>
        <span>Só fantasmas por aqui...</span>
      </PokedexView>

      <FlexBox align="center" justify="center" direction="row">
        <ButtonBack
          onClick={() => navigate("/")}>
            <MdHome size="20"/>
              Voltar para a tela principal
          </ButtonBack>
      </FlexBox>
    </Container>
  );
};

export default Error404;