export default function (node: HTMLElement, callback: (visible: boolean) => void) {
  const observer = new IntersectionObserver(([entry]) => {
    callback(entry.isIntersecting)

    // If the element is visible, unobserve it immediately
    if (entry.isIntersecting) {
      observer.unobserve(node)
    }
  });

  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
    }
  }
}