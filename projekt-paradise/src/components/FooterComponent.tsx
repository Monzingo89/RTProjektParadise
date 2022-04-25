import React from 'react';

export const FooterComponent = () => {
    return (
            <footer className="footer center">
                <div className="p1 stack max-width">
                    <div className="one">
                        <img src="images/pp.png" className="footerimg" />
                        <p className="">Built with love on <img src="images/sol-logo.png" className="tiny-solana" />Solana</p>
                        <div className="logo">&copy; 2022 Projekt Paradise</div>
                        <div className="">
                            <p><a href="#">Home</a> | <a href="">Marketplace</a> | <a target="_blank"
                                    href="https://www.diamondvaults.io/vault/ProjektParadise" rel="noreferrer">Staking</a> | <a target="_blank"
                                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb&outputAmount=0&fixed=in" rel="noreferrer">$CHI</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    )
}