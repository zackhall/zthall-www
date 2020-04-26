import Octicon, { Clippy, Check } from '@primer/octicons-react';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div class="inline-flex">
      <span class="bg-white border border-gray-400 text-gray-800 text-sm font-display py-2 px-4 rounded-l-sm">
        {text}
      </span>
      <CopyToClipboard
        text={text}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 10 * 1000);
        }}
      >
        <button class="bg-gray-300 hover:bg-gray-400 border border-gray-400 border-l-0 text-gray-800 text-sm py-2 px-4 rounded-r-sm w-24">
          {!copied ? (
            <Octicon icon={Clippy} className="align-baseline" />
          ) : (
            <Octicon icon={Check} className="align-baseline" />
          )}
          &nbsp;
          {!copied ? 'Copy' : 'Copied'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyButton;
