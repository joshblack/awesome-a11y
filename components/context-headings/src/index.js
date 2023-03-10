import * as React from 'react';

const HeadingContext = React.createContext({
  level: 1,
});

function Section({ asChild, children, ...rest }) {
  const { level } = React.useContext(HeadingContext);
  return (
    <HeadingContext.Provider value={{ level: Math.min(level + 1, 6) }}>
      {asChild ? (
        React.cloneElement(React.Children.only(children), rest)
      ) : (
        <section {...rest}>{children}</section>
      )}
    </HeadingContext.Provider>
  );
}

function Heading(props) {
  const { level } = React.useContext(HeadingContext);
  return React.createElement(`h${level}`, props);
}

export { Section, Heading };
