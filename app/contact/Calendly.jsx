'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

const Calendly = () => {
  useEffect(() => {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/ldpersonalvermittlung-com',
      parentElement: document.getElementById('calendly-inline-widget'),
    });
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <div
        id="calendly-inline-widget"
        style={{ minWidth: 500, height: 700 }}
        data-auto-load="false"
      ></div>
    </>
  );
};

export default Calendly;
