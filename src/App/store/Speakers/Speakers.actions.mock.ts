/* tslint:disable:no-magic-numbers */
import * as speakersService from '~/services/speakers/mock';
import {
	IActions,
	State
} from '../types';
import {
	SetSpeakersPayload,
	SpeakersState
} from './Speakers.types';
import {
	SpeakersReducer
} from './Speakers.reducer';

export const AllSpeakersType = 'all';

export abstract class SpeakersActions extends SpeakersReducer.Actions<SpeakersState, State, IActions> {

	promoSpeakersIndex = -1;

	selectSpeaker(id: string) {

		const {
			speakers
		} = this.state;

		return speakers.find(speaker => speaker.id === id);
	}

	selectSpeakersByType(type: string) {

		const {
			speakers
		} = this.state;

		return !type || type === AllSpeakersType
			? speakers
			: speakers.filter(speaker => speaker.type === type);
	}

	async fetchSpeakers(lang?: string) {

		const speakers = await speakersService.fetch({
			lang
		});

		this.setSpeakers(speakers);
	}

	abstract setSpeakers(payload: SetSpeakersPayload);
}
