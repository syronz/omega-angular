export function FindPrimaryKey(obj: any): string {
  const keys = Object.keys(obj);

  const result = keys.find(x => obj[x].key === true);

  return result;
}
