import React from 'react';
import { Error } from './Loading';
import { formatChartsNumber } from '../../../utils/format';

const StatsCard = ({ isLoading, error, accountData }) => {
  return (
    !isLoading && (
      <tbody className='text-xs shadow-md [&>*:nth-child(even)]:bg-[#c2f2d8] smooth'>
        {error ? (
          <Error />
        ) : (
          [
            ['Daily', `${accountData.daily}%`],
            ['Monthly', `${accountData.monthly}%`],
            ['Gain', `${accountData.gain.toFixed(2)}%`],
            ['Abs Gain', `${accountData.absGain}%`],
            ['Profit', `$${formatChartsNumber(accountData.profit)}`],
            ['Profit Factor', `${accountData.profitFactor}%`],
            ['Pips', formatChartsNumber(accountData.pips)],
            ['Drawdown', `${accountData.drawdown}%`],
          ].map(([title, value], index) => (
            <tr key={index}>
              <td className='flex justify-between px-2 py-1 transition-all ease-in-out duration-500 smooth'>
                <span className='smooth'>{title}:</span>
                <span className='smooth'>{value}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    )
  );
};

export default StatsCard;
