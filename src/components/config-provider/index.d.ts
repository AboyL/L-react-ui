/// <reference types="react" />
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}
export declare const ConfigContext: import('react').Context<ConfigConsumerProps>;
