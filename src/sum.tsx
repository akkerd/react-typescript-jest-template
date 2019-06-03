import * as React from 'react';

interface Props {
  a: number;
  b: number;
}

const SumHelper: React.FunctionComponent<Props> = (props:Props) => {
  return (<p>{props.a + props.b}</p>);
};

export default SumHelper;