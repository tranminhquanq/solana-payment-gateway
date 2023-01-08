import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
    const endpoint = useMemo(() => 'https://api.devnet.solana.com', []);

    return (
        <>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <Component {...pageProps} />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </>
    );
}
