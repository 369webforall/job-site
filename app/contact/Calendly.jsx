'use client';
import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <>
      <div className="w-full h-full">
        <InlineWidget
          url="https://calendly.com/ldpersonalvermittlung-com?hide_gdpr_banner=1"
          style={{ padding: 0 }}
        />
      </div>
    </>
  );
};

export default Calendly;
