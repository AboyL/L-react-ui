import { createContext } from 'react';
import { PRE_FIX } from '../../utils/constants';
export const ConfigContext = createContext({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `${PRE_FIX}-${suffixCls}`;
  },
});
//# sourceMappingURL=index.js.map
