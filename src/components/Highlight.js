import React from 'react';
import HighlightLabel from '../components/HighlightLabel';

const Highlight = ({query, messages}) => {
  if (!messages) {
    return <div />;
  }
  const errs = messages.reduce((prev, curr) => {
    /**
     * Some words yield multiple messages for the same position.
     * This reduce should remove the duplicate position.
     */ 
    const present = prev.find((p) => {
      return p.start === curr.start &&
        p.end === curr.end;
    });
    if (!present) {
      prev.push(curr);
    }
    return prev;
  }, []);

  let start = 0;
  let result = errs.map((error, i) => {
    const beginning = query.substring(start, error.start);
    const word = query.substring(error.start, error.end);
    let corrected = <HighlightLabel key={i} {...{beginning, word, error}}/>
    start = error.end;
    return corrected;
  });
  /**
   * create a label for any text that is left after the last error
   */
  if (start < query.length) {
    let rest = query.substring(start, query.length);
    result.push(<HighlightLabel key={query.length} {...{rest}}/>);
  }
  return <div>{result}</div>;
}

export default Highlight;