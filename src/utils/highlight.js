import escapeMarkup from '../utils/escapeMarkup';
import cssObjToStr from '../utils/cssObjToStr';

const offense = {
  'background-color': '#ce4037',
  'border-radius': '0.2em',
  'display': 'inline-block',
  'left': '-0.125em',
  'top': '0',
  'padding-right': '0.25em',
  'margin-right': '-0.25em',
  'position': 'relative',
  'line-height': 1.2
};
export default function (query, res) {
  var errs = res.body.map(function (m) {
    return {
      start: m.location.start.offset,
      end: m.location.end.offset
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
  return errs.map((e, i) => {
    const beginning = query.substring(start, e.start);
    const word = query.substring(e.start, e.end);
    const jsonStyle = cssObjToStr(offense);
    let corrected = '<span style="' + jsonStyle + '">' + escapeMarkup(word) + '</span>';
    start = e.end;
    return escapeMarkup(beginning) + corrected;
  }).reduce((curr, prev) => {
    return curr += prev;
  }, '');
}