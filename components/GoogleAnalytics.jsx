'use client';

import React from 'react';
import Script from 'next/script';
const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
