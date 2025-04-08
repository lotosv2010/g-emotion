import { serializeStyles, serializePseudo } from '../serialize';
import { insertStyles } from '../utils';
function css(...args: any[]) {
  const serialized = serializeStyles(args);
  insertStyles(serialized);
  // 处理伪类
  serializePseudo(serialized);
  return `css-${serialized.name}`
}

export default css;