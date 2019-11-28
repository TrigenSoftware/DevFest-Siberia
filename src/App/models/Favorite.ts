import {
	Record
} from 'immutable';

export interface IFavoriteProps {
	lectureId: string;
}

type Favorite = ReturnType<Record.Factory<IFavoriteProps>>;

const Favorite = Record<IFavoriteProps>({
	lectureId: ''
});

export default Favorite;
