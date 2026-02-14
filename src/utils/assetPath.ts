/**
 * 拼接带 base 的静态资源路径，支持子路径部署（如 /lavas/）和相对路径（file:// 或 ./）
 */
const BASE = import.meta.env.BASE_URL ?? '/';

export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${normalized}`;
}
