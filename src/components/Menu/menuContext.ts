import { createContext } from 'react';
import { selectFunc } from './index';

interface menuContext {
  activeKey: string;
  onSelect: selectFunc;
  mode: string;
}
export default createContext<menuContext>({
  activeKey: '',
  mode: '',
  onSelect: () => {},
});
