import { Routes, Route } from 'react-router-dom';

import { Counter } from './features/counter/counter.js';

export function App() {
  const page =
    <>
      <Counter label={'Taps'} />
    </>;
  return (
    <Routes>
      <Route path={'/*'} element={page} />
    </Routes>
  );
}
