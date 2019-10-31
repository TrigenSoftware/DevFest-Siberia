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
import SpeakersPromo from './SpeakersPromo';

export function mapStateToProps({ speakers }: State) {
	return {
		speakers: speakers.speakers
	};
}

const pendingActions = {

	actionsReady: false,

	fetchSpeakers() {},

	selectPromoSpeakers() {
		return [];
	},

	selectSpeaker() {
		return [];
	}
};

export function mapActionsToProps({ speakers }: IActions): IActionsProps {

	if (!speakers) {
		return pendingActions;
	}

	return {
		actionsReady:        true,
		fetchSpeakers:       speakers.fetchSpeakers,
		selectPromoSpeakers: speakers.selectPromoSpeakers,
		selectSpeaker:       speakers.selectSpeaker
	};
}

export default Connect({
	dependsOn:   SpeakersSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(SpeakersPromo);
