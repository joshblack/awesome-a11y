import { ScrollableRegion } from 'react-scrollable-region';

export default function Example() {
  return (
    <main>
      <h1>Example</h1>
      <ScrollableRegion
        aria-label="Example region"
        style={{ width: 500, height: 500, overflow: 'auto' }}
      >
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.1)',
            width: 1000,
            height: 1000,
            padding: '1rem',
          }}
        >
          Scrollable region
        </div>
      </ScrollableRegion>
    </main>
  );
}
