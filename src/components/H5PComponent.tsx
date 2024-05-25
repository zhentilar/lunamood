import React, { useEffect } from 'react';

declare var H5P: any;

const H5PComponent: React.FC = () => {
  useEffect(() => {
    const h5pContainer = document.getElementById('h5p-container');

    if (h5pContainer) {
      const h5pUrl = 'https://lunamood.netlify.app/h5p/sorular.h5p'; // H5P dosyanızın doğru URL'si

      // H5P script dosyasını dinamik olarak yükleyin
      const script = document.createElement('script');
      script.src = 'https://lunamood.netlify.app/h5p/core/js/h5p-resizer.js'; // H5P script dosyasının URL'si
      script.onload = () => {
        // H5P kütüphanesinin yüklendiğini kontrol edin
        if (typeof H5P !== 'undefined') {
          H5P.externalDispatcher.on('xAPI', (event: any) => {
            console.log('H5P içerik yüklendi:', event);
          });

          H5P.load({
            frame: 'h5p-container',
            src: h5pUrl,
            size: '100%',
            resizeIframe: true
          });
        } else {
          console.error('H5P kütüphanesi yüklenemedi.');
        }
      };

      script.onerror = () => {
        console.error('H5P script dosyası yüklenemedi.');
      };

      document.body.appendChild(script);
    } else {
      console.error('h5p-container öğesi bulunamadı.');
    }
  }, []);

  return <div id="h5p-container" style={{ width: '100%', height: '500px' }}>Loading H5P content...</div>;
};

export default H5PComponent;
