export const deepClone = <T>(target: T): T => {
  if (target === null) {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime()) as any;
  }

  if (Array.isArray(target)) {
    return target.map((v) => deepClone<any>(v)) as any;
  }

  if (typeof target === 'object') {
    const cp = { ...(target as { [key: string]: any }) } as {
      [key: string]: any;
    };
    Object.keys(cp).forEach((k) => {
      cp[k] = deepClone<any>(cp[k]);
    });
    return cp as T;
  }

  return target;
};
