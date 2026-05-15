import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ as: Tag = 'div', className = '', children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
