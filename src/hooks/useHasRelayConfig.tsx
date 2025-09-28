import { getSettings } from '@store/app/AppSelectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useHasRelayConfig = () => {
  const [hasConfig, setHasConfig] = useState<boolean>();

  const settings = useSelector(getSettings);

  useEffect(() => {
    setHasConfig(
      !!settings?.relay &&
        !!settings?.network &&
        !!settings?.payerPublicKey &&
        !!settings?.workProviderPublicKey
    );
  }, [settings]);

  return hasConfig;
};
