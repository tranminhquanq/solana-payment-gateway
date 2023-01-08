import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import QRCodeStyling from '@solana/qr-code-styling';
import styled from 'styled-components';
import { createQROptions } from '@solana/pay';

const StyledQRCode = styled.div`
    border-radius: 1rem;
    overflow: hidden;

    & > svg {
        display: block;
    }
`;

interface QRCodeProps {
    url: URL;
    size?: number;
    bgColor?: string;
    fgColor?: string;
}
const QRCode: FC<QRCodeProps> = ({ url, bgColor = 'transparent', fgColor = '#2a2a2a' }) => {
    const [size, setSize] = useState(() =>
        typeof window === 'undefined' ? 400 : Math.min(window.screen.availWidth - 48, 400)
    );

    useEffect(() => {
        const listener = () => setSize(Math.min(window.screen.availWidth - 48, 400));
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, []);

    const options = useMemo(() => createQROptions(url, size, bgColor, fgColor), [url, size, bgColor, fgColor]);
    const qr = useMemo(() => new QRCodeStyling(), []);
    useEffect(() => qr.update(options), [qr, options]);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            qr.append(ref.current);
        }
    }, [ref, qr]);

    return <StyledQRCode ref={ref} />;
};

export default memo(QRCode);
