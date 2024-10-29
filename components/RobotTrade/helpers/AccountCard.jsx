import React from 'react';
import { Error } from './Loading';
import { formatChartsNumber } from '../../../utils/format';

const AccountCard = ({ isLoading, error, accountData }) => {
  return (
    !isLoading && (
      <tbody className='text-xs shadow-md [&>*:nth-child(even)]:bg-[#c2f2d8]'>
        {error ? (
          <Error />
        ) : (
          [
            ['Balance', `$${formatChartsNumber(accountData.balance)}`],
            ['Equity', `$${formatChartsNumber(accountData.equity)}`],
            ['Equity Percent', `${accountData.equityPercent}%`],
            ['Deposits', `$${formatChartsNumber(accountData.deposits)}`],
            ['Withdrawals', `$${formatChartsNumber(accountData.withdrawals)}`],
          ].map(([title, value], index) => (
            <tr key={index}>
              <td className='flex justify-between px-2 py-1'>
                <span>{title}:</span>
                <span>{value}</span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    )
  );
};

export default AccountCard;
