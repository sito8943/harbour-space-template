export const addMeta = (key: string, content: string) => {
  const metaElement = document.createElement("meta");
  metaElement.setAttribute("name", key);
  metaElement.setAttribute("content", content);
  document.head.appendChild(metaElement);
};
