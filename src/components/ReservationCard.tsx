import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'

type ReservationCardType = {
    name: string
    index: number
}

export default function ReservationCard({name, index}: ReservationCardType) {
    
    const dispatch = useDispatch()
    return (
        <div onClick={()=> {dispatch(removeReservation(index))}} className="reservation-card-container">{name}</div>
    )
}
