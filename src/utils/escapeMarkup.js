var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

export default function (string) {
  return String(string).replace(/[&<>"'\/]/g, (s) => {
    return entityMap[s];
  });
}