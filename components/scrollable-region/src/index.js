import * as React from 'react';

function ScrollableRegion({
  'aria-label': label,
  'aria-labelledby': labelledby,
  children,
  ...rest
}) {
  const [hasOverflow, setHasOverflow] = React.useState(false);
  const ref = React.useRef(null);
  const regionProps = {};

  if (hasOverflow) {
    regionProps.role = 'region';
    regionProps.tabIndex = 0;
    regionProps['aria-label'] = label;
    regionProps['aria-labelledby'] = labelledby;
  }

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHasOverflow(
          entry.target.scrollHeight > entry.target.clientHeight ||
            entry.target.scrollWidth > entry.target.clientWidth,
        );
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div {...rest} {...regionProps} ref={ref}>
      {children}
    </div>
  );
}

export { ScrollableRegion };
