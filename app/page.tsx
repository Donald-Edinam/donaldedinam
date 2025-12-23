import { Container } from "@/components/layout";

export default function Home() {
  return (
    <>
      {/* Section with prose container */}
      <section className="section">
        <Container size="prose">
          <h1 className="text-4xl font-bold mb-4">Layout System Demo</h1>
          <p className="text-text-muted mb-4">
            This demonstrates the semantic layout and spacing system. The prose container
            maintains an optimal line length of 65 characters for comfortable reading.
          </p>
          <p className="text-text-muted">
            Notice how the vertical spacing (section class) creates a calm, predictable rhythm.
            This is structural design, not decorative.
          </p>
        </Container>
      </section>

      {/* Section with content container */}
      <section className="section-sm bg-bg-secondary">
        <Container size="content">
          <h2 className="text-2xl font-bold mb-4">Content Container</h2>
          <p className="text-text-muted mb-4">
            The content container (768px max-width) is ideal for standard content blocks.
            This section uses section-sm for tighter spacing.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-border-subtle rounded">
              <p className="font-mono text-sm">font-sans (Satoshi)</p>
            </div>
            <div className="p-4 border border-border-subtle rounded">
              <p className="font-serif text-sm">font-serif (Newsreader)</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section with layout container */}
      <section className="section">
        <Container size="layout">
          <h2 className="text-2xl font-bold mb-4">Layout Container</h2>
          <p className="text-text-muted mb-6">
            The layout container (1280px) provides maximum width for full-width layouts.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {['Spacing', 'Typography', 'Colors'].map((item) => (
              <div key={item} className="p-6 border border-border-subtle rounded">
                <h3 className="font-bold mb-2">{item}</h3>
                <p className="text-sm text-text-muted">
                  Semantic system with predictable values
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
