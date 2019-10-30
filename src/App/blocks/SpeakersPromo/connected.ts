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
import Loading from '~/components/Loading';
import {
	IActionsProps
} from './types';
import SpeakersPromo from './SpeakersPromo';

export function mapStateToProps({ speakers }: State) {
	return {
		speakers: speakers.speakers
	};
}

export function mapActionsToProps({ speakers }: IActions): IActionsProps {
	return {
		fetchSpeakers:       speakers.fetchSpeakers,
		selectPromoSpeakers: speakers.selectPromoSpeakers,
		selectSpeaker:       speakers.selectSpeaker
	};
}

export default Connect({
	dependsOn: SpeakersSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(SpeakersPromo);
