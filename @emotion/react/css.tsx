import { serializeStyles, serializePseudo } from '../serialize'
function css(...args: any[]) {
  const serialized = serializeStyles(args);
  serializePseudo(serialized);
  return serialized;
}

export default css;