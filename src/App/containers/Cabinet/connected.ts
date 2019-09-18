import {
	Connect
} from '@flexis/redux';
import {
	State
} from '~/store/types';
import {
	UserSegment
} from '~/store/segments';
import Loading from '~/components/Loading';
import {
	CabinetContainer
} from './Cabinet';

export function mapStateToProps({ user }: State) {
	return {
		user: user.user,
		order: user.order
	};
}

export default Connect({
	dependsOn: UserSegment,
	loading:   Loading,
	mapStateToProps
})(CabinetContainer);
