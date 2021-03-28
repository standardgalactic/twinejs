import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Card, CardActions, CardBody, CardHeader} from '../container/card';
import {IconButton, IconButtonProps} from '../control/icon-button';
import {Modal, ModalProps} from './modal';
import {TextInput, TextInputProps} from '../control/text-input';
import './prompt-modal.css';

export interface PromptModalProps extends ModalProps {
	cancelButtonProps?: Partial<IconButtonProps>;
	detail?: string;
	domId: string;
	message: string;
	onCancel: () => void;
	onChange: TextInputProps['onChange'];
	onSubmit: () => void;
	submitButtonProps?: Partial<IconButtonProps>;
	validate?: (value: string) => string | undefined;
	value: string;
}

export const PromptModal: React.FC<PromptModalProps> = props => {
	const {
		cancelButtonProps,
		detail,
		domId,
		message,
		onCancel,
		onChange,
		onSubmit,
		submitButtonProps,
		validate,
		value,
		...otherProps
	} = props;
	const {t} = useTranslation();

	return (
		<Modal {...otherProps}>
			<div className="prompt-modal">
				<Card>
					<CardHeader>{message}</CardHeader>
					<CardBody>
						{detail}
						<TextInput onChange={onChange} value={value}>
							{t('common.name')}
						</TextInput>
					</CardBody>
					<CardActions>
						<IconButton
							icon="x"
							label={t('common.cancel')}
							onClick={onCancel}
							{...cancelButtonProps}
						/>
						<IconButton
							buttonType="submit"
							icon="check"
							label={t('common.ok')}
							onClick={onSubmit}
							variant="primary"
							{...submitButtonProps}
						/>
					</CardActions>
				</Card>
			</div>
		</Modal>
	);
};
