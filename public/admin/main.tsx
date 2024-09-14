import { TinaCMS, TinaProvider } from 'tinacms';
import React, { type FC } from 'react';
import ReactDOM from 'react-dom';

// Configuramos el CMS sin 'useEditState' ya que no es necesario para este caso
const cms = new TinaCMS({
  enabled: true,
  sidebar: true,
});

const Main: FC = () => {
  return (
    <TinaProvider cms={cms}>
      <h1>TinaCMS Dashboard</h1>
    </TinaProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
