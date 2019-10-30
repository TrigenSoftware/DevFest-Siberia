/* tslint:disable:no-magic-numbers */
import * as speakersService from '~/services/speakers';
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

	selectPromoSpeakers() {

		const {
			speakers
		} = this.state;
		const promoSpeakers = speakers.filter(speaker => speaker.promo);

		if (!promoSpeakers.length) {
			return [];
		}

		if (process.env.SEED) {
			return promoSpeakers.splice(0, 3);
		}

		if (this.promoSpeakersIndex === -1) {
			this.promoSpeakersIndex = Math.floor(Math.random() * (promoSpeakers.length - 2));
		}

		return promoSpeakers.splice(this.promoSpeakersIndex, 3);
	}

	selectSpeakersByType(type: string) {

		const {
			speakers
		} = this.state;

		return !type || type === AllSpeakersType
			? speakers
			: speakers.filter(speaker => speaker.type === type);
	}

	async fetchSpeakers() {

		const speakers = await speakersService.fetch();

		this.setSpeakers(speakers);
	}

	abstract setSpeakers(payload: SetSpeakersPayload);
}
