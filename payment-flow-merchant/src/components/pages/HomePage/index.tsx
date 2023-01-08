import { FC, useMemo, useState } from 'react';
import { encodeURL } from '@solana/pay';
import StyledMainLayout from '../../shared/MainLayout';
import CustomHead from '../../shared/CustomHead';
import QRCode from '../../shared/QRCode';
import NumPad from '../../NumPad';
import { FullScreenIcon, SolonaPayIcon, SolonaPowerIcon } from '../../../assets/svg';
import {
    StyledMainContainer,
    StyledMainLeftContent,
    StyledMainRightContent,
    StyledMainLeftContentTop,
    StyledFullScreenButton,
    StyledMainLeftContentMiddle,
    StyledMainLeftContentMiddleContainer,
    StyledMainLeftContentBottom,
    StyleNumPadText,
    StyledNumpadValue,
    StyledMainRightContentTop,
    StyledMainRightContentBottom,
    StyledSummaryContainer,
    StyledSummaryTitle,
    StyledSummaryTotal,
    StyledSummaryTotalLabel,
    StyledSummaryTotalAmountContainer,
    StyledSummaryTotalAmountLabel,
    StyledSummaryTotalValue,
    StyledGenerateQRCodeContainer,
} from './styles';

const HomePage: FC = () => {
    const [value, setValue] = useState<string>('0');
    const url = useMemo(
        () =>
            new URL(
                `solana:GvHeR432g7MjN9uKyX3Dzg66TqwrEWgANLnnFZXMeyyj?amount=${parseFloat(
                    value
                )}&reference=A6ANWUxUpfQUgEMhcxB1wCURGMv6PZDeRQHK4nvnC6Wo&label=Solana+Pay`
            ),
        [value]
    );
    console.log('url', url);

    return (
        <>
            <CustomHead title="Home Page" />
            <StyledMainLayout screen>
                <StyledMainContainer>
                    <StyledMainLeftContent>
                        <StyledMainLeftContentTop>
                            <StyledFullScreenButton>
                                <FullScreenIcon />
                            </StyledFullScreenButton>
                        </StyledMainLeftContentTop>
                        <StyledMainLeftContentMiddle>
                            <StyledMainLeftContentMiddleContainer>
                                <StyleNumPadText>Enter amount in SOL</StyleNumPadText>
                                <StyledNumpadValue>{value}</StyledNumpadValue>
                                <NumPad setValue={setValue} />
                            </StyledMainLeftContentMiddleContainer>
                        </StyledMainLeftContentMiddle>
                        <StyledMainLeftContentBottom>
                            Powered by <SolonaPayIcon />
                        </StyledMainLeftContentBottom>
                    </StyledMainLeftContent>
                    <StyledMainRightContent>
                        <StyledMainRightContentTop>
                            <StyledSummaryContainer>
                                <StyledSummaryTitle>Balance Due</StyledSummaryTitle>
                                <StyledSummaryTotal>
                                    <StyledSummaryTotalLabel>Total</StyledSummaryTotalLabel>
                                    <StyledSummaryTotalAmountContainer>
                                        <StyledSummaryTotalAmountLabel>SOL</StyledSummaryTotalAmountLabel>
                                        <StyledSummaryTotalValue>
                                            <span>{value}</span>
                                        </StyledSummaryTotalValue>
                                    </StyledSummaryTotalAmountContainer>
                                </StyledSummaryTotal>
                            </StyledSummaryContainer>
                            <StyledGenerateQRCodeContainer>
                                <QRCode url={url} bgColor="white" />
                                <p className="mt-12 font-bold leading-6 text-center">
                                    Scan this code with your Solana Pay wallet
                                </p>
                                <p className="leading-6 text-center">You&apos;ll be asked to approve the transaction</p>
                            </StyledGenerateQRCodeContainer>
                        </StyledMainRightContentTop>
                        <div className="text-center cursor-pointer">
                            <StyledMainRightContentBottom>
                                <SolonaPowerIcon />
                                Recent Transactions
                            </StyledMainRightContentBottom>
                        </div>
                    </StyledMainRightContent>
                </StyledMainContainer>
            </StyledMainLayout>
        </>
    );
};

export default HomePage;
