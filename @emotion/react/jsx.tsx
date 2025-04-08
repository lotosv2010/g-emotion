import Emotion from '../components/Emotion';
function jsx(type: any, props: any, ...children: any[]) {
  return (
    <Emotion {...props} type={type}>
      {children}
    </Emotion >
  )
}
export default jsx;