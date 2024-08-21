import * as v from 'valibot';
import { Address } from './address.model';
import { Company } from './company.model';
import { Email } from './types/email.type';

export const User = v.object({
    id: v.number(),
    name: v.string(),
    username: v.string(),
    email: Email,
    address: Address,
    phone: v.string(),
    website: v.string(),
    company: Company,
});

export type User = v.InferInput<typeof User>;
