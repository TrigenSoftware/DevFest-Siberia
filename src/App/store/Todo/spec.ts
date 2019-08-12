import createStore from '../';
import {
	TodoSegment
} from './register';

describe('Store', () => {

	describe('Todo Segment', () => {

		const store = createStore();

		beforeAll(() => {
			return store.loadSegment(TodoSegment, true);
		});

		it('should add item', () => {

			expect(store.state.todo.items.toJS()).toEqual([]);

			store.actions.todo.add({
				id: '123',
				text: 'test text'
			});

			expect(store.state.todo.items.toJS()).toEqual([
				{
					id: '123',
					text: 'test text'
				}
			]);

		});

		it('should edit item', () => {

			store.actions.todo.edit({
				id: '123',
				text: 'edit text'
			});

			expect(store.state.todo.items.toJS()).toEqual([
				{
					id: '123',
					text: 'edit text'
				}
			]);
		});

		it('should remove item', () => {

			store.actions.todo.remove('123');

			expect(store.state.todo.items.toJS()).toEqual([]);
		});
	});
});
