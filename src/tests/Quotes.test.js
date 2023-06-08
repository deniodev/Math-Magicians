import renderer from 'react-test-renderer';
import Fetchquote from '../components/Quotes';

describe('test if quote matches snapshot', () => {
  test('test if quote is a match', () => {
    const quoteComponent = renderer
      .create(<Fetchquote />)
      .toJSON();
    expect(quoteComponent).toMatchSnapshot();
  });
});
