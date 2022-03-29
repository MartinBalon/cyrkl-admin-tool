import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setFraudScan } from 'store/productsSlices';
import { FraudScanWrapper, SwitchCircle, SwitchWrapper } from './styled';

const FraudScan = () => {
	const { fraudScan } = useSelector((state: RootState) => state.products);
	const dispatch = useDispatch();

	return (
		<FraudScanWrapper>
			Fraud Scan
			<SwitchWrapper
				active={fraudScan}
				onClick={() => dispatch(setFraudScan())}
			>
				<SwitchCircle active={fraudScan}></SwitchCircle>
			</SwitchWrapper>
		</FraudScanWrapper>
	);
};

export default FraudScan;
