import React from 'react';
import { serializeStyles } from '../serialize';
import Insertion from './Insertion';

function Emotion(props: any) {
  const serialized = serializeStyles(props.css);
  const {...newProps } = props
  newProps.className = 'css' + "-" + serialized.name;
  const WrappedComponent = props.type;

  return (
    <div>
      <Insertion serialized={serialized} />
      <WrappedComponent {...newProps} />
    </div>
  )
}

export default Emotion;