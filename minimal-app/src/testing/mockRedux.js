export const mockDispatch = jest.fn().mockName('dispatch');

jest.mock('react-redux', () => ({
  useSelector: jest.fn((selector) => {
    if (selector.mock === undefined) {
      throw new Error(`Call to unmocked selector ${selector.name}`);
    }
    return selector();
  }).mockName('useSelector'),
  useDispatch: jest.fn().mockName('useDispatch').mockReturnValue(mockDispatch),
}));
