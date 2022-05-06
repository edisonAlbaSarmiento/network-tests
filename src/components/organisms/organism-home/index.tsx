import { useState, Key } from 'react';
import { TitleComponet, LoaderComponent } from 'components/atoms';
import {
	CardsInfo,
	ModalMolecule,
	ProfileModal,
	Comments,
} from 'components/molecules';
import { ContentMain, ContentTagActive, CloseTag } from './styled';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux-service/services';

type HomeOrganismProps = {
	dataCard: any;
	selectItem?: any;
	setIdUser?: any;
	setFilterByTag?: any;
	filterByTag?: string;
	listCommentsPost?: any;
	dataByUserPost?: any;
};

function HomeOrganism({
	dataCard,
	selectItem,
	setIdUser,
	setFilterByTag,
	filterByTag,
	listCommentsPost,
	dataByUserPost,
}: HomeOrganismProps): JSX.Element {
	const [isActiveModal, setActiveModal] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<'profile' | 'comments'>(
		'comments',
	);
	const loader = useSelector(selectLoader);
	return (
		<>
			<ModalMolecule
				isOpen={isActiveModal}
				setIsOpen={() => setActiveModal(false)}>
				{loader && <LoaderComponent />}
				{!loader && showModal === 'comments' && listCommentsPost?.length > 0 && (
					<>
						<TitleComponet variant='textCards' fontSize='12px' color='black'>
							{`Total Comments: ${listCommentsPost?.length}`}
						</TitleComponet>
					</>
				)}
				{!loader &&
					showModal === 'comments' &&
					(listCommentsPost?.length > 0 ? (
						listCommentsPost?.map((comment: any, index: number) => (
							<Comments comment={comment} />
						))
					) : (
						<TitleComponet variant='textCards' fontSize='12px' color='black'>
							No comments
						</TitleComponet>
					))}

				{!loader && showModal === 'profile' && dataByUserPost && (
					<ProfileModal
						dateOfBirth={dataByUserPost?.dateOfBirth}
						email={dataByUserPost?.email}
						firstName={dataByUserPost?.firstName}
						gender={dataByUserPost?.gender}
						lastName={dataByUserPost?.lastName}
						phone={dataByUserPost?.phone}
						picture={dataByUserPost?.picture}
						registerDate={dataByUserPost?.registerDate}
						updatedDate={dataByUserPost?.updatedDate}
						location={dataByUserPost?.location}
					/>
				)}
			</ModalMolecule>

			{filterByTag && (
				<ContentTagActive>
					<TitleComponet variant='textCards' fontSize='12px' color='black'>
						Tag Filter Active by
					</TitleComponet>
					<TitleComponet variant='textCards' fontSize='12px' color='white'>
						{filterByTag}
					</TitleComponet>
					<CloseTag onClick={() => setFilterByTag('')}>
						<MdClose />
					</CloseTag>
				</ContentTagActive>
			)}
			<ContentMain>
				{dataCard?.map((item: any, index: Key | null | undefined) => (
					<CardsInfo
						dataCardItem={item}
						onShowDataUserAction={() => {
							setIdUser(item.owner.id);
							setActiveModal(true);
							setShowModal('profile');
						}}
						onShowCommentsAction={() => {
							selectItem(item);
							setActiveModal(true);
							setShowModal('comments');
						}}
						onSelectTagAction={setFilterByTag}
						key={index}
					/>
				))}
			</ContentMain>
		</>
	);
}

export default HomeOrganism;
