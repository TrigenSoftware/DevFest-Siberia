import {
	Connect
} from '@flexis/redux';
import {
	ITodoStateProps,
	State,
	IActions
} from '~/store/types';
import {
	TodoSegment
} from '~/store/segments';
import Loading from '~/components/Loading';
import {
	TodoContainer
} from './Todo';

function mapStateToProps({ todo }: State): ITodoStateProps {
	return {
		items: todo.items
	};
}

function mapActionsToProps({ todo }: IActions) {
	return {
		add:    todo.add,
		edit:   todo.edit,
		remove: todo.remove
	};
}

export default Connect({
	dependsOn: TodoSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(TodoContainer);
