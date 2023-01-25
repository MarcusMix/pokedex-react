import { FC } from "react";

// icons
import { MdCatchingPokemon } from "react-icons/md";

// styles
import * as Styles from "./pokemonsCount.styles";

// types
import type { IPokemoncount } from "./pokemonCount.types";

// ::
const PokemonCount: FC<IPokemoncount> = ({ count }) => {
  return (
    <Styles.PokemonCountContainer
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
      wrap="wrap"
    >
      <MdCatchingPokemon size="25" />
      {count} Pokemons
    </Styles.PokemonCountContainer>
  );
};

export default PokemonCount;