export function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            const stored = localStorage.getItem('theme');
            if (stored === 'precision') {
              document.documentElement.classList.add('theme-precision');
            }
          })();
        `,
            }}
        />
    );
}
