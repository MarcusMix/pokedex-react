import { useState } from "react";
import { useSetRecoilState } from "recoil";

// icons
import { MdSearch } from "react-icons/md";

// recoil: atoms

// components
import * as Styles from './pokemonSearch.styles';
import { Button, Input } from "../../components/components";
import { atomPokemonSearch } from "../../store/atoms/atoms";

// ::
const PokemonSearch = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  // recoil: states
  const setPokemon = useSetRecoilState(atomPokemonSearch);

  return (
    <Styles.SearchContainer align="center" justify="flex-start" direction="row" gap="xxs">
      <Input
        placeholder="Procurar por nome ou ID"
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <Button onClick={() => setPokemon(searchPokemon)}>
        <MdSearch size="20" />
        Procurar
      </Button>
    </Styles.SearchContainer>
  );
};

export default PokemonSearch;