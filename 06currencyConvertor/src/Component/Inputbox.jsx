import { useId } from "react";
import React from "react";

function Inputbox({
  label,
  amount,
  onChangeAmount,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,


  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>{label}</label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex-wrap justify-end text-right">
        <p className="text-black/40 w-full mb-2">Currency Type</p>
        <select 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
              <option key={currency} value={currency}> 
              {currency}
              </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
