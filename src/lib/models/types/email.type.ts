import * as v from 'valibot';

export const Email = v.pipe(v.string(), v.trim(), v.email());
export type Email = v.InferInput<typeof Email>;
