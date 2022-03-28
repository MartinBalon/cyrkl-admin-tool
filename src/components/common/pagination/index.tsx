import React, { useEffect, useState } from 'react';
import { PaginationList, PaginationListItem } from './styled';
import { PaginationProps } from 'types';

const Pagination = ({
	totalPages,
	currentPage,
	onChangePage,
}: PaginationProps) => {
	const [paginationArray, setPaginationArray] = useState<number[]>([]);

	useEffect(() => {
		const generatedArray: number[] = [];
		for (let i = 1; i <= totalPages; i++) {
			generatedArray.push(i);
		}
		setPaginationArray([...generatedArray]);
	}, [totalPages, currentPage]);

	return (
		<PaginationList>
			{paginationArray.map(page => (
				<PaginationListItem
					key={page}
					active={currentPage === page}
					onClick={() => onChangePage(page)}
				>
					{page}
				</PaginationListItem>
			))}
		</PaginationList>
	);
};

export default Pagination;
