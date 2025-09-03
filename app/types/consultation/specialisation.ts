import { Booking } from './booking'
interface Specialisation {
    id: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    bookings?: Booking[],
}

export {
    Specialisation
}
