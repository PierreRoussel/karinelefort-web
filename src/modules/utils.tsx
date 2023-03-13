export const getAuthor = (obj: any) => {
  if (!obj.firstname) return;
  return `${obj.firstname} ${(obj.lastname && obj.lastname)}`;
};

export const toUrlFriendly = (string: string) => {
  return string.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
  //.replace('?','-').replace(" ", "-").replace(/[^a-z0-9 _-]/gi, '-').replace(' ','-').toLowerCase();
}

const threshold = 0.5;
const options = {
  root: null,
  rootMargin: '0px',
  threshold,
};

const handleIntersect = function (entries: any, observer: any) {
  entries.forEach(function (entry: any) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal');
      entry.target.classList.add('reveal-loaded');
      observer.unobserve(entry.target);
    }
  });
};

export const observer = new IntersectionObserver(handleIntersect, options);