import * as v from 'valibot';

export const Company = v.object({
    name: v.string(),
    catchPhrase: v.string(),
    bs: v.string(),
});

export type Company = v.InferInput<typeof Company>;
