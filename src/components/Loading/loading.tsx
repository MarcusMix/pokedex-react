import { FC } from "react";

// icons
import pokeBall from "../../assets/pokeball-rotate.png";

// components
import * as Styles from "./loading.styles";

// types
import type { ILoading } from "./loading.types";

// ::
const Loading: FC<ILoading> = ({ isLoading, loadingText }) => {
  if (!isLoading) return null;

  return (
    <Styles.LoadingContainer
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
    >
      <Styles.PokemonIcon>
        <img src={pokeBall} alt="Illustração de carregamento: pokebola girando" />
      </Styles.PokemonIcon>
      {loadingText}
    </Styles.LoadingContainer>
  );
};

export default Loading;