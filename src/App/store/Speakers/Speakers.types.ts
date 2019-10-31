import {
	Record
} from 'immutable';

export type Speaker = any;

/**
 * Speakers state.
 */

export interface ISpeakersStateProps {
	speakers: Speaker[];
}

type SpeakersState = ReturnType<Record.Factory<ISpeakersStateProps>>;

const SpeakersState = Record<ISpeakersStateProps>({
	speakers: []
});

export {
	SpeakersState
};

/**
 * SetSpeakers action.
 */

export type SetSpeakersPayload = Speaker[];

export interface ISetSpeakersAction {
	payload: SetSpeakersPayload;
}
