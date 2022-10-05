import LayoutContainer from '../Components/Layout/LayoutContainer';
import LayoutPage from '../Components/Layout/LayoutPage';
import renderWthRedux from './testLayout';

describe('Basic components should render without crashing', () => {
  it('should basic layout component render ', () => {
    renderWthRedux(
      <LayoutContainer loading={false} error={false}>
        <h1>Hello World</h1>
      </LayoutContainer>,
    );
  });
  it('The landing image should render properly', () => {
    renderWthRedux(
      <LayoutContainer>
        <LayoutPage />
      </LayoutContainer>,
    );
  });
});
