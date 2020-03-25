import { createContext } from 'react';
import { selectFunc } from './index';

interface menuContext {
  activeKey: string;
  onSelect: selectFunc;
}
export default createContext<menuContext>({
  activeKey: '',
  onSelect: () => {},
});
