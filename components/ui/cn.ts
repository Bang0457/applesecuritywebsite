export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean>

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []

  const push = (v: ClassValue): void => {
    if (!v) return
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v))
      return
    }
    if (Array.isArray(v)) {
      for (const item of v) push(item)
      return
    }
    if (typeof v === "object") {
      for (const [key, enabled] of Object.entries(v)) {
        if (enabled) out.push(key)
      }
    }
  }

  for (const i of inputs) push(i)
  return out.join(" ")
}
