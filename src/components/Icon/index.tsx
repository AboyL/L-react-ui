import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';

import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export enum Theme {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
}
export interface IconProps extends FontAwesomeIconProps {
  prefixCls: string;
  theme: Theme;
}
const Icon: React.FC<IconProps> = (props) => {
  const { prefixCls, className, theme = Theme.primary, ...restProps } = props;
  const configContext = useContext(ConfigContext);
  const { getPrefixCls } = configContext;
  const prefix = getPrefixCls('icon', prefixCls);
  const classNames = classnames(prefix, className, {
    [`${prefix}-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classNames} {...restProps} />;
};

export default Icon;
