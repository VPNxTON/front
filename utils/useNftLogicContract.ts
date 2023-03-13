import { useEffect, useState } from 'react';
import NftLogic from '../contracts/NftLogic';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { Address, OpenedContract } from 'ton-core';

export function useNftLogicContract() {
  const client = useTonClient();
  const [val, setVal] = useState<null | number>();

  const NftLogicContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new NftLogic(
      Address.parse('EQBYLTm4nsvoqJRvs_L-IGNKwWs5RKe19HBK_lFadf19FUfb') // replace with your address 
    );
    return client.open(contract) as OpenedContract<NftLogic>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!NftLogicContract) return;
      setVal(null);
      const val = await NftLogicContract.getNftLogic();
      setVal(Number(val));
    }
    getValue();
  }, [NftLogicContract]);

  return {
    value: val,
    address: NftLogicContract?.address.toString(),
  };
}
