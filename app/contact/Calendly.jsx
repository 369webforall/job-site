'use client';
import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <>
      <div>
        <InlineWidget url="https://calendly.com/ldpersonalvermittlung-com?hide_gdpr_banner=1" />
      </div>
    </>
  );
};

export default Calendly;
