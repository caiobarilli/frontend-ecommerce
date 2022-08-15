import Base from 'templates/Base'

import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { useQueryGames } from 'graphql/queries/games'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import Card from 'components/Card'
import { Grid } from 'components/Grid'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Reload } from '@styled-icons/ionicons-solid/Reload'

import * as S from './styles'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data)
    return (
      <S.ReloadSpin>
        <Reload />
      </S.ReloadSpin>
    )

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={handleFilter}
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
        />
        {loading ? (
          <S.ReloadSpin>
            <Reload />
          </S.ReloadSpin>
        ) : (
          <section>
            {data?.games.length ? (
              <>
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
                {hasMoreGames && (
                  <S.FloatingButton>
                    <S.ShowMore role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMore>
                  </S.FloatingButton>
                )}
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
