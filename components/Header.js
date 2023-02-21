import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link legacyBehavior href="/">
                <a>NFT Marketplace</a>
                </Link>

                <Link legacyBehavior href="/sell-nft">
                <a>Sell NFT</a>
                </Link>
            <ConnectButton/>
        </nav>
                
    )
}