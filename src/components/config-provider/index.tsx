import { createContext } from 'react'
import { PRE_FIX } from '../../utils/constants'
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `${PRE_FIX}-${suffixCls}`;
  },

});
