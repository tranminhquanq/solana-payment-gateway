import { FC, useCallback, useMemo } from 'react';
import { DeleleIcon } from '../../assets/svg';
import { StyledNumpadButtonContainer, StyledNumpadButton } from './styles';

const buttonsText = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];
const decimals = 9;

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
interface NumPadButtonProps {
    input: number | '.' | JSX.Element | string;
    onInput(key?: number | '.' | JSX.Element | string): void;
}

const NumPadButton: FC<NumPadButtonProps> = ({ input, onInput }) => {
    return <StyledNumpadButton onClick={() => onInput(input)}>{input}</StyledNumpadButton>;
};

interface NumPadProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    setValue: Function;
}
const NumPad: FC<NumPadProps> = ({ setValue }) => {
    const regExp = useMemo(() => new RegExp('^\\d*([.,]\\d{0,' + decimals + '})?$'), []);

    const onInput = useCallback(
        (key: Digits | '.' | JSX.Element | string) =>
            setValue((value: string) => {
                let newValue = (value + key).trim().replace(/^0{2,}/, '0');
                if (newValue) {
                    newValue = /^[.,]/.test(newValue) ? `0${newValue}` : newValue.replace(/^0+(\d)/, '$1');
                    if (regExp.test(newValue)) return newValue;
                }
                return value;
            }),
        [regExp, setValue]
    );
    const onBackspace = useCallback(
        () => setValue((value: string) => (value.length ? value.slice(0, -1) || '0' : value)),
        [setValue]
    );

    return (
        <StyledNumpadButtonContainer>
            {buttonsText.map((buttonText, idx) => (
                <NumPadButton key={idx} input={buttonText} onInput={onInput} />
            ))}
            <NumPadButton input={<DeleleIcon />} onInput={onBackspace} />
        </StyledNumpadButtonContainer>
    );
};

export default NumPad;
