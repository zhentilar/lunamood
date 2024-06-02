import React, { useEffect } from 'react';
import './RiseComponent.css';

const RiseComponent: React.FC = () => {
  useEffect(() => {
    const loadScripts = async () => {
      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Script load error for ${src}`));
          document.body.appendChild(script);
        });
      };

      const scripts = [
        'lib/player-0.0.11.min.js',
        'lib/lzwcompress.js'
      ];

      for (const src of scripts) {
        await loadScript(src);
      }

      // Inline script equivalent
      window.resizeTo(window.screen.width, window.screen.height);

      // Load Entry
      const loadEntry = () => {
        const script = document.createElement('script');
        script.textContent = `
          (function() {
            const jsonp = {}

            function loadModule(manifest) {
              const p = []

              if (manifest['.css'] != null) {
                for (var idx = 0; idx < manifest['.css'].length; idx++) {
                  p.push(new Promise((resolve, reject) => {
                    var link = document.createElement('link')
                    link.onload = resolve
                    link.onerror = reject
                    link.rel = 'stylesheet'
                    link.href = 'lib/' + manifest['.css'][idx]
                    document.body.appendChild(link)
                  }))
                }
              }

              if (manifest['.js'] != null) {
                for (var idx = 0; idx < manifest['.js'].length; idx++) {
                  p.push(new Promise((resolve, reject) => {
                    var script = document.createElement('script')
                    script.onload = resolve
                    script.onerror = reject
                    script.src = 'lib/' + manifest['.js'][idx]
                    document.body.appendChild(script)
                  }))
                }
              }

              return Promise.all(p)
            }

            function deserialize(str) {
              const buffer = Uint8Array.from(atob(str), c => c.charCodeAt(0))
              const json = new TextDecoder().decode(buffer)
              const result = JSON.parse(json)
              return result
            }

            function __loadEntry() {
              return loadModule(JSON.parse(document.getElementById('__ENTRY__').textContent))
            }

            function __loadRemoteEntry(name) {
              const manifest = JSON.parse(document.getElementById('__REMOTE_ENTRIES__').textContent)
              if (manifest[name] == null) throw new Error(\`Missing manifest for remote entry "\${name}".\`)
              return loadModule(manifest[name])
            }
            
            async function __loadJsonp(id, path) {
              try {
                return await new Promise((resolve, reject) => {
                  try {
                    jsonp[id] = resolve
                    const script = document.createElement('script')
                    script.onerror = reject
                    script.src = \`./\${path}\`
                    document.head.appendChild(script)
                  } catch (err) {
                    reject(err)
                  }
                })
              } finally {
                delete jsonp[id]
              }
            }

            function __resolveJsonp(id, data) {
              const resolve = jsonp[id]
              if (typeof resolve !== 'function') {
                throw new Error(\`Could not load JSONP "\${id}"\`)
              }
              resolve(data)
            }

            async function __fetchCourse(name) {
              name = name == null ? window.i18n.default : name
              if (!window.i18n.available.includes(name)) {
                console.warn(\`Could not load locale "\${name}"\`)
                name = window.i18n.available[0]
              }
              const encoded = await __loadJsonp(\`course:\${name}\`, \`locales/\${name}.js\`)
              const courseData = deserialize(encoded)
              return courseData
            }

            window.__loadEntry = __loadEntry
            window.__loadRemoteEntry = __loadRemoteEntry
            window.__loadJsonp = __loadJsonp
            window.__resolveJsonp = __resolveJsonp
            window.__fetchCourse = __fetchCourse
          })()
        `;
        document.body.appendChild(script);
      };

      loadEntry();
    };

    loadScripts();
  }, []);

  return (
    <div id="app"></div>
  );
};

export default RiseComponent;
