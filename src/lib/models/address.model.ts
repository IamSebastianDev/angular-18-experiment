import * as v from 'valibot';

export const Address = v.object({
    street: v.string(),
    suite: v.string(),
    city: v.string(),
    zipcode: v.string(),
});

export type Address = v.InferInput<typeof Address>;
