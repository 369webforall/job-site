'use client';

import React from 'react';
import Script from 'next/script';
const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${id}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
