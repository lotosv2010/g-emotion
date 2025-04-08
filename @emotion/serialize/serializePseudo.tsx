import { insertStyles } from '../utils';

function serializePseudo(serialized: any) {
  if (serialized.pseudoClasses.size) {
    for (const [key, value] of serialized.pseudoClasses.entries()) {
      const k = key.slice(1)
      insertStyles({
        name: `${serialized.name}${k}`,
        styles: value
      })
    }
    serialized.pseudoClasses.clear();
  }
}

export default serializePseudo;