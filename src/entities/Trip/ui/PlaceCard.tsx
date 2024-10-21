import { getPlacePhoto } from '../../Place';
import { ITrip } from '../model/types/Trip';
import cls from './style.module.scss';

interface IProps {
  trip: ITrip;
  onClick?: () => void;
}

export const TripCard = ({ trip, onClick }: IProps) => {

	return (
		<div className={cls.card} onClick={onClick}>
			{trip.area.photos?.length && <img className={cls.image} src={getPlacePhoto(trip.area.photos[0])} alt="" />}
			<div className={cls.info}>
				<div className={cls.name}>
					{trip.area.name}
				</div>
			</div>
		</div>
	);
};