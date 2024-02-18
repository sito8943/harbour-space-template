export const addMeta = (key: string, content: string) => {
  const metaElement = document.createElement("meta");
  metaElement.setAttribute("id", key);
  metaElement.setAttribute("name", key);
  metaElement.setAttribute("content", content);
  document.head.appendChild(metaElement);
};

export const removeMeta = (key: string) => {
  const metaElement = document.getElementById(key);
  if (metaElement) document.head.removeChild(metaElement);
};
