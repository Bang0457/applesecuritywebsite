import { kv } from "@vercel/kv";

const KEY_PREFIX = "paystack:processed:";
const TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days

function inMemorySet(): Set<string> {
  const g = globalThis as any;
  if (!g.__PAYSTACK_INMEMORY_PROCESSED__) {
    g.__PAYSTACK_INMEMORY_PROCESSED__ = new Set<string>();
  }
  return g.__PAYSTACK_INMEMORY_PROCESSED__;
}

function isKvConfigured() {
  // @vercel/kv uses Upstash Redis env vars in most setups.
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function keyFor(reference: string) {
  return `${KEY_PREFIX}${reference}`;
}

export async function isReferenceProcessed(reference: string): Promise<boolean> {
  const ref = reference.trim();
  if (!ref) return false;

  if (!isKvConfigured()) return inMemorySet().has(ref);

  // Any value means "processed".
  const value = await kv.get<string>(keyFor(ref));
  return value !== null && value !== undefined;
}

export async function markReferenceProcessed(reference: string): Promise<void> {
  const ref = reference.trim();
  if (!ref) return;

  if (!isKvConfigured()) {
    inMemorySet().add(ref);
    return;
  }

  await kv.set(keyFor(ref), "1", { ex: TTL_SECONDS });
}

