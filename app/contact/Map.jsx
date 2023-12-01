import React from 'react';

const Map = () => {
  return (
    <div className="flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d19722.35970972033!2d8.32469070143972!3d51.83730861842425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47ba2917dbfe9f83%3A0x427f28131548350!2sRheda-Wiedenbr%C3%BCck%2C%20Germany!3m2!1d51.8458575!2d8.299742499999999!4m5!1s0x47ba2f9230474f9b%3A0x5ae5479d713e005d!2sNickelstra%C3%9Fe%2021%2C%2033378%20Rheda-Wiedenbr%C3%BCck%2C%20Germany!3m2!1d51.834461999999995!2d8.362779!5e0!3m2!1sen!2shu!4v1700050198682!5m2!1sen!2shu"
        width="1200"
        height="600"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="block"
      ></iframe>
    </div>
  );
};

export default Map;
