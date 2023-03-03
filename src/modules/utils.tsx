export const getAuthor = (obj: any) => {
  if (!obj.firstname) return;
  return `${obj.firstname} ${(obj.lastname && obj.lastname)}`;
};

export const toUrlFriendly = (string: string) => {
  return string.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
  //.replace('?','-').replace(" ", "-").replace(/[^a-z0-9 _-]/gi, '-').replace(' ','-').toLowerCase();
}