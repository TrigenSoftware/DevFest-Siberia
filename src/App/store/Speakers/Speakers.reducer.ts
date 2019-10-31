import {
	Reducer
} from '@flexis/redux';
import {
	SpeakersState,
	ISetSpeakersAction
} from './Speakers.types';

export class SpeakersReducer extends Reducer {

	static namespace = 'speakers';

	setSpeakers(state: SpeakersState, { payload }: ISetSpeakersAction) {
		return state.set(
			'speakers',
			payload
		);
	}
}
