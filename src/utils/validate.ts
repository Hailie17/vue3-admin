/**
 * 区分内部路由路径和外部链接，以便在处理链接跳转时采取不同的处理方式
 */

export const isExternal = (path: string): boolean => {
  return /http?/.test(path)
}