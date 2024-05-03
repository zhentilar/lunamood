import React from 'react';
import './ProgressBar.css'; // İlerleme çubuğu için CSS dosyası

// İlerleme çubuğu bileşeni için gerekli prop'ları tanımlar
interface ProgressBarProps {
  progress: number; // İlerleme yüzdesi
}

// İlerleme çubuğu bileşeni
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // İlerleme çubuğunun stilini belirler
  const progressStyles = {
    width: `${progress}%`, // İlerleme yüzdesine göre genişlik belirlenir
  };

  return (
    <div className="progress-bar"> {/* İlerleme çubuğu bileşeni */}
      <div className="progress" style={progressStyles} /> {/* İlerleme çubuğu */}
    </div>
  );
};

export default ProgressBar; // İlerleme çubuğu bileşeni dışa aktarılır
