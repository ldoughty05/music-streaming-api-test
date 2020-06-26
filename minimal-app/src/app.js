import { Route } from 'react-router-dom';

import { Counter } from './features/counter/counter.js';

export function App() {
  return (
    <>
      <Route exact path={'/'}>
        <Counter label={'Taps'} />
      </Route>
    </>
  );
}
