import { useLayoutEffect } from 'react';
import { insertStyles } from '../utils';
import { serializePseudo} from '../serialize';

function Insertion({ serialized }: any) {
  useLayoutEffect(() => {
    insertStyles(serialized);
    // 处理伪类
    serializePseudo(serialized);
  });
  return null;
};
export default Insertion;