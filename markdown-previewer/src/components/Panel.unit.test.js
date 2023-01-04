import { Panel } from './Panel'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'

describe('Panel component', () => {
  test('renders its child component', () => {
    render(
      <Panel label="test">
        <div className="test-panel-child">panel content</div>
      </Panel>
    )

    screen.getByText('panel content')
  })

  test('initially panel displays expand-more icon', () => {
    render(
      <Panel label="test" isExpanded={false}>
        <div className="test-panel-child">panel content</div>
      </Panel>
    )

    expect(screen.getByTestId('expand-more')).toBeDefined()
  })
})
