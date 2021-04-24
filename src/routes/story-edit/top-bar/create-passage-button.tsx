import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {IconPlus} from '@tabler/icons';
import {IconButton} from '../../../components/control/icon-button';
import {
	createUntitledPassage,
	Story,
	useStoriesContext
} from '../../../store/stories';
import {Point} from '../../../util/geometry';

export interface CreatePassageButtonProps {
	getCenter: () => Point;
	story: Story;
}

export const CreatePassageButton: React.FC<CreatePassageButtonProps> = props => {
	const {getCenter, story} = props;
	const {dispatch} = useStoriesContext();
	const handleClick = React.useCallback(() => {
		const {left, top} = getCenter();
		createUntitledPassage(dispatch, story, left, top);
	}, [dispatch, getCenter, story]);
	const {t} = useTranslation();

	return (
		<IconButton
			icon={<IconPlus />}
			label={t('storyEdit.topBar.addPassage')}
			onClick={handleClick}
			variant="create"
		/>
	);
};
