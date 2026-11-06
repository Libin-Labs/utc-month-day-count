export function daysBetweenIso(left: string, right: string): number {
  const parse = (s: string) => {
    if (typeof s !== 'string') throw new TypeError('Expected date text');
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) throw new RangeError('Expected YYYY-MM-DD');
    const d = new Date(0),
      y = Number(m[1]),
      mo = Number(m[2]),
      day = Number(m[3]);
    d.setUTCFullYear(y, mo - 1, day);
    d.setUTCHours(0, 0, 0, 0);
    if (y < 1 || d.getUTCFullYear() !== y || d.getUTCMonth() !== mo - 1 || d.getUTCDate() !== day)
      throw new RangeError('Invalid date');
    return d.getTime();
  };
  return Math.abs(parse(left) - parse(right)) / 86400000;
}
