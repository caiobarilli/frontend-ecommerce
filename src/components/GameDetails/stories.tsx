import { Container } from 'components/Container'
import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/Game Details',
  component: GameDetails,
  args: {
    developer: 'Different Tales',
    releaseDate: '2020-11-21T23:00:00',
    platforms: ['windows', 'mac', 'linux'],
    publisher: 'Walkabout',
    rating: 'BR0',
    genres: ['Role-playing']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <Container>
    <GameDetails {...args} />
  </Container>
)

Default.parameters = {
  layout: 'mobile',
  backgrounds: { default: 'dark' }
}
