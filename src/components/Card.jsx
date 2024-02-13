import React from 'react';
import PropTypes from 'prop-types';

export default function card({ data }) {
  const { location, current } = data;

  return (
    <section className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-2 justify-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-3">ºC</span>
      </div>

      <div className="text-center flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="icone" className="items-center" />
        <span className="text-slate-700 font-medium">{current.condition.text}</span>
      </div>
    </section>
  );
}

card.propTypes = {
  data: PropTypes.object,
}.isRequired;
