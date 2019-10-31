import {
	Connect
} from '@flexis/redux';
import {
	State,
	IActions
} from '~/store/types';
import {
	SpeakersSegment
} from '~/store/segments';
import {
	IActionsProps
} from './types';
import Speakers from './Speakers';

export function mapStateToProps({ speakers }: State) {
	return {
		speakers: speakers.speakers
	};
}

const pendingActions = {
	actionsReady: false,
	fetchSpeakers() {},
	selectSpeakersByType() {
		return [];
	},
	selectSpeaker() {
		return null;
	}
};

export function mapActionsToProps({ speakers }: IActions): IActionsProps {

	if (!speakers) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSpeakers:        speakers.fetchSpeakers,
		selectSpeakersByType: speakers.selectSpeakersByType,
		selectSpeaker:        speakers.selectSpeaker
	};
}

export default Connect({
	dependsOn:   SpeakersSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(Speakers);
