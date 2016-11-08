import React from 'react';
import HighlightLabel from '../components/HighlightLabel';

const handleOnHover = function(message) {
  console.log(message);
};

export default function (query, res) {
  var errs = res.body.map(function (m) {
    return {
      start: m.location.start.offset,
      end: m.location.end.offset,
      message: m.message
    };
  }).reduce((prev, curr) => {
    /**
     * Some words yield multiple messages for the same position.
     * This reduce should remove the duplicate position.
     */ 
    var present = prev.find((p) => {
      return p.start === curr.start &&
        p.end === curr.end;
    });
    if (!present) {
      prev.push(curr);
    }
    return prev;
  }, []);
  var start = 0;
  return errs.map((error, i) => {
    const beginning = query.substring(start, error.start);
    const word = query.substring(error.start, error.end);
    let corrected = <HighlightLabel key={i} {...{beginning, word, error, handleOnHover}}/>
    start = error.end;
    return corrected;
  });
}