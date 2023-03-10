import { Heading, Section } from 'react-context-headings';
import { ScrollableRegion } from 'react-scrollable-region';

export default function Examples() {
  return (
    <main>
      <Heading>Examples</Heading>
      <Section>
        <Heading>Scrollable region</Heading>
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
      </Section>
    </main>
  );
}
