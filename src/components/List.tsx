import styled from '@emotion/styled';
import React, { FC } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { SafelyRenderChildren } from './SafelyRenderChildren';

const ScrollWrapper = styled.div`
	border: 1px solid black;
	width: 100%;
	width: 100%;
	height: 500px;
	overflow: auto;
`;

export interface ListProps {
	items: string[];
}

export const VirtualizedList: FC<ListProps> = ({ items }) => {
	return (
		<ScrollWrapper>
			<SafelyRenderChildren>
				<AutoSizer>
					{({ height, width }) => (
						<List height={height} itemCount={items.length} itemSize={35} width={width}>
							{({ index, style, isScrolling }) => (
								<div className='item' style={style}>
									{isScrolling ? 'loading...' : items[index]}
								</div>
							)}
						</List>
					)}
				</AutoSizer>
			</SafelyRenderChildren>
		</ScrollWrapper>
	);
};
