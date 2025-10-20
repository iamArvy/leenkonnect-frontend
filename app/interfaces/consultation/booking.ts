// import { User } from "../user";
// import { Specialisation } from "./specialisation";

import type { User } from "..";
import type { Specialisation } from ".";

export interface Booking {
    id: string;
    booking_number: string;
    email: string;
    specialisation_id: number;
    date: string;
    time: string;
    first_name: string;
    last_name: string;
    company: string | null;
    link: string | null;
    challenge: string;
    location: string;
    user_id: number;
    specialisation?: Specialisation;
    user?: User
}

export type Bookings = Booking[]
