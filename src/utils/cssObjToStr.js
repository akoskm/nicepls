export default function (obj) {
  const cssStr = JSON.stringify(obj);
  return cssStr.substring(2, cssStr.length - 1).replace(/\"/g, '').replace(/\,/g, ';');
}