import {Panel} from './Panel'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'

describe('Panel component', () => {
  test('renders its child component', async () => {
    render(
      <Panel label="test">
        <div className="test-panel-child">panel content</div>
      </Panel>
    )

    await screen.findByText('panel content')
  })
})
