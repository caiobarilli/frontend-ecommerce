import Base from 'templates/Base'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import * as S from './styles'

export type GameProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: CardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: CardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames
}: GameProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcomming"
        Games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase title="You may like these games" Games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
