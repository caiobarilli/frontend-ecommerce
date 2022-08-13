import Base from 'templates/Base'

import { useQueryGames } from 'graphql/queries/games'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import Card from 'components/Card'
import { Grid } from 'components/Grid'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Reload } from '@styled-icons/ionicons-solid/Reload'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        {loading ? (
          <S.ReloadSpin>
            <Reload />
          </S.ReloadSpin>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <Card
                  key={game.slug}
                  title={game.name}
                  slug={'/game/' + game.slug}
                  image={game.cover ? game.cover.url : ''}
                  developer={game.developers[0].name}
                  price={new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(game.price)}
                />
              ))}
            </Grid>

            <S.FloatingButton>
              <S.ShowMore role="button" onClick={handleShowMore}>
                <p>Show More</p>
                <ArrowDown size={35} />
              </S.ShowMore>
            </S.FloatingButton>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
