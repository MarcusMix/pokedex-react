import { FC } from "react"
import { FlexBox } from "../components"
import * as CardStyles from './card.styles'

interface ICardProps {
  id: number,
  name: string,
  image: string,
  preview?: string,
  type: TPokemonType,
}

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

      <CardStyles.PokemonSpot type={type} align="center" justify="center">
        <CardStyles.PokemonSprite src={image} />
      </CardStyles.PokemonSpot>

      <FlexBox align="center" justify="space-between" direction="row">
        <CardStyles.PokemonText>{name}</CardStyles.PokemonText>
        {preview && <img src={preview} alt=""/>}
      </FlexBox>
    </CardStyles.Container>
  )
}

export default Card