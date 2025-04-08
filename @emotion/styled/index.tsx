import { serializeStyles } from '../serialize';
import Insertion from '../components/Insertion';
function createStyled(tag: any) {
  return function (...args: any[]) {
    function Styled(props: any) {
      const serialized = serializeStyles(args, props);
      const className = 'css' + "-" + serialized.name;
      const newProps = { ...props };
      newProps.className = className;
      const FinalTag = tag;
      return (
        <>
          <Insertion serialized={serialized} />
          <FinalTag {...newProps} />
        </>
      )
    }
    return Styled;
  }
}
const tags = ['button', 'div'];
const newStyled: any = createStyled.bind(null);
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});
export default newStyled;