import {render, screen, fireEvent} from '@testing-library/dom'
import LinkAsButton from './LinkAsButton';

describe('LinkAsButton', () => {
    test ('renders component with text and route passed', () => {
        render(<LinkAsButton text="test" route="test" />);
        expect(LinkAsButton({text: 'test', route: '/test'}))

    })
})
