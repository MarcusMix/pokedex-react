import { FC } from "react"
import { FlexBox } from "../components"
import * as CardStyles from './card.styles'
import type { ICardProps } from "./card.types"

const Card: FC<ICardProps> = ({id, image, name, preview, type}) => {
    return (
    <CardStyles.Container
      gap="xs"
      align="center"
      justify="center"
      direction="column"
    >
      <FlexBox align="center" justify="flex-end" direction="row">
        <CardStyles.PokemonText type={type}>#{id}</CardStyles.PokemonText>
      </FlexBox>

      <CardStyles.PokemonSpot type={type} align="center" justify="center" direction="column">
        <CardStyles.PokemonSprite src={image} />
      </CardStyles.PokemonSpot>

      <CardStyles.PokemonPreviewSection align="center" justify="space-between" direction="row">
        <CardStyles.PokemonText type={type}>{name}</CardStyles.PokemonText>
        {preview && <img src={preview} alt=""/>}
      </CardStyles.PokemonPreviewSection>
    </CardStyles.Container>
  )
}

export default Card