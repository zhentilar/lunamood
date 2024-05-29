import React from 'react';

const H5PComponent: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: '40px', marginTop: '40px' }}>
        <iframe src="https://h5p.org/h5p/embed/1489834" 
        width="1091" height="380" 
        frameBorder="0" 
        allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" 
        title="LunaMood Quiz">
        </iframe>
      </div>
      <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charSet="UTF-8"></script>
    </>
  );
};

export default H5PComponent;
