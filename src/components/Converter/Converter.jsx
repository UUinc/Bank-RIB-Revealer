import { useState } from 'react';
import styles from './Converter.module.css';

//utils
import { getBankList } from '../../utils/bankList';
import { getCityList } from '../../utils/cityList';

function Converter() {
  const [RIB, setRIB] = useState("");
  const [bank, setBank] = useState("");

  const bankList = getBankList();
  const cityList = getCityList();

  const findBank = ()=>
  {
    const bankCode = RIB.substring(0, 3);
    const cityCode = RIB.substring(3, 6);

    try
    {
      const cityName = cityList[cityCode] ? " - " + cityList[cityCode] : "";
      const bankWord = bankList[bankCode].word;
      const bankName = bankList[bankCode].name || bankWord;
      setBank(bankName + cityName);
    }
    catch
    {
      setBank("not found");
      return;
    }
  }

  return (
    <div id='contact' className={styles.container}>
      <div className={styles.formContainer}>
        <input type="number" id="rib" name="rib" placeholder="RIB" onChange={(e) => setRIB(e.target.value)} />
        <input className={styles.answer} type="text" id="bank" name="bank" placeholder="" value={bank} onChange={(e) => setRIB(e.target.value)} readOnly="true"/>

        <button className={styles.send} onClick={findBank}>Find &#9654;</button>
      </div>
    </div>
  );
}
export default Converter;