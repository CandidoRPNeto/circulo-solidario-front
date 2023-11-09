import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function DownloadButton() {
  return (
    <div>
      <button type="button" className="btn btn-primary btn-lg" style={{ fontSize: '16px', padding: '20px 60px' }}>
        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '10px' }} />
        Baixar
      </button>
    </div>
  );
}

export default DownloadButton;
