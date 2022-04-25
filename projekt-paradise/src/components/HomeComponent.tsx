import React from 'react';

function HomeComponent() {
    return (
        <div className="wrapper styled">
            <div className="wrapper-padding max-width">
                <div className="sim-slider desktop-banner" data-width="2550" data-height="1030" data-animation="250"
                    data-current="true" data-progress="false"
                    style={{ backgroundImage: `url('images/main-banner.png')`, backgroundPosition: 'center top' }}>
    
                    <div className="sim-slider-inner">
                        <div className="sim-slider-slide">
                            <div className="sim-slider-layer" data-effect="fadeInDown" data-width="1110" data-height="115"
                                data-left="751" data-top="50"><img src="_assets/layer_0025.png" /></div>
                            <div className="sim-slider-layer" data-effect="fadeInDown" data-width="900" data-height="848"
                                data-left="870" data-top="177"><img src="_assets/layer_0026.png" /></div>
                            <div className="sim-slider-layer" data-effect="fadeInDown" data-width="694" data-height="848"
                                data-left="1511" data-top="180"><img src="_assets/layer_0028.png" /></div>
                            <div className="sim-slider-layer" data-effect="fadeInDown" data-width="694" data-height="848"
                                data-left="405" data-top="180"><img src="_assets/layer_0027.png" /></div>
                        </div>
                    </div>
                </div>
    
                <img src="images/main-banner-2.png" className="mobile-banner" />
    
                <div className="p1 stack1 clearfix center button-c-3">
                    <a target="_blank" href="https://magiceden.io/marketplace/projekt_paradise" rel="noreferrer">
                        <button type="button" className="three-1 hvr-pop">Buy on MagicEden</button>
                    </a>
                    <a target="_blank"
                        href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb&outputAmount=0&fixed=in" rel="noreferrer">
                        <button type="button" className="three-2 hvr-pop">Buy $CHI</button>
                    </a>
                    <a target="_blank" href="https://moonrank.app/collection/projekt_paradise" rel="noreferrer">
                        <button type="button" className="three-3 hvr-pop">Rarity on Moonrank</button>
                    </a>
                </div>
    
                <h2>Roadmap</h2>
                <div className="p1 stack1 clearfix">
                    <div className="one">
                        <a target="_blank" href="#"><img src="images/new-roadmap-banner2.png"
                                className="desktop-banner hover-item" /></a>
                        <a target="_blank" href="#"><img src="images/mobile-roadmap.png"
                                className="mobile-banner hover-item" /></a>
                    </div>
                </div>
                <h2>Utilities</h2>
    
                <div className="p2 stack1 clearfix w-800">
                    <div className="one">
                        <div className="row offset-ut">
                            <div className="column1-fh stack1">
                                <div className="column1-fh css-ut1515 stack1">
                                    <div className="css-0" style={{transform: 'none' }}>
                                        <img src="images/chitoken-1.png" className="hvr-wobble-vertical" />
                                    </div>
                                </div>
                            </div>
                            <div className="column2-fh stack1">
                                <h5>Staking & Token</h5>
                                <p>
                                </p>
                                <ul className="ut-list">
                                    <li>Lock your warrior in for a period of 7, 15, or 30 days. Get access to your rarity
                                        bonus for token emission by locking-in.</li>
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                        <div className="row offset-ut">
                            <div className="column1-fh">
                                <div className="column1-fh css-ut1515 stack">
                                    <div className="css-0" style={{transform: 'none' }}>
                                        <img src="images/chitoken-2.png" className="hvr-wobble-vertical" />
                                    </div>
                                </div>
                            </div>
                            <div className="column2-fh stack1">
                                <h5>$CHI Marketplace & Auctions</h5>
                                <p></p>
                                <ul className="ut-list">
                                    <li>Bid on beautiful 1/1 art pieces to be auctioned exclusively in $CHI & snipe NFTs at
                                        a discounted price.
                                        HODLers will be able to free with $CHI.</li>
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p2 stack1 clearfix w-800">
                    <div className="one">
                        <div className="row offset-ut">
                            <div className="column1-fh">
                                <div className="column1-fh css-ut1515 stack">
                                    <div className="css-0" style={{transform: 'none' }}>
                                        <img src="images/chitoken-3.png" className="hvr-wobble-vertical" />
                                    </div>
                                </div>
                            </div>
                            <div className="column2-fh stack1">
                                <h5>Breeding & Dojos</h5>
                                <p>
                                </p>
                                <ul className="ut-list">
                                    <li>By burning $CHI to build a Dojo, your warrioress and ronin will be able to meditate
                                        far more effectively and generate larger amounts of $CHI.</li>
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                        <div className="row offset-ut">
                            <div className="column1-fh">
                                <div className="column1-fh css-ut1515 stack">
                                    <div className="css-0" style={{transform: 'none' }}>
                                        <a target="_blank" href="#">
                                            <img src="images/chitoken-4.png" className="hvr-wobble-vertical" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="column2-fh stack1">
                                <h5>Dojo Games</h5>
                                <p></p>
                                <ul className="ut-list">
                                    <li>HODLers will be able to gamble $CHI in casino type games to increase passive income,
                                        paying for things like breeding or locked-in meditation!</li>
                                </ul>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p1 stack1 clearfix">
                    <div className="one">
                        <img src="images/main-chi-banner-2.png" className="desktop-banner" />
                        <img src="images/mobile-staking-banner-1.png" className="mobile-banner" />
                    </div>
                </div>
                <h2>Based on Rarity</h2>
                <p className="w-500" style={{ marginBottom: '35px' }}>In order to unlock rarity-based meditation (staking), a holder
                    must lock in their NFT for a fixed duration of time. Rarity will be rewarded in two ways: statistical
                    rarity and your warrioress’ ranking by belt.<br /></p>
                <div className="p1 stack1 w-800">
    
                    <div className="one hvr-wobble-vertical">
                        <div className="column1-bh">
    
                            <div className="css-0" style={{transform: 'none' }}>
                                <h6>Rarity Bonus #1</h6>
                                <p className="m-25">Mythic (1-99) - 2 $CHI</p>
    
                            </div>
    
                        </div>
                    </div>
    
                </div>
    
                <div className="p1 stack1 w-800">
                    <div className="one hvr-wobble-vertical">
                        <div className="column1-bh">
                            <div className="css-0" style={{transform: 'none' }}>
                                <h6>Rarity Bonus #2</h6>
                                <p className="m-25">Exotic (100-249) - 1.5 $CHI</p>
                            </div>
    
                        </div>
                    </div>
                </div>
    
                <div className="p1 stack1 w-800">
                    <div className="one hvr-wobble-vertical">
                        <div className="column1-bh">
    
                            <div className="css-0" style={{transform: 'none' }}>
                                <h6>Rarity Bonus #3</h6>
                                <p className="m-25">Legendary (250-449) - 1 $CHI</p>
                            </div>
    
                        </div>
                    </div>
                </div>
    
                <div className="p1 stack1 w-800">
                    <div className="one hvr-wobble-vertical">
                        <div className="column1-bh">
    
                            <div className="css-0" style={{transform: 'none' }}>
                                <h6>Rarity Bonus #4</h6>
                                <p className="m-25">Rare (450- 749) - 0.75 $CHI</p>
                            </div>
    
                        </div>
                    </div>
                </div>
    
                <div className="p1 stack1 w-800">
                    <div className="one hvr-wobble-vertical">
                        <div className="column1-bh">
    
                            <div className="css-0" style={{transform: 'none' }}>
                                <h6>Rarity Bonus #5</h6>
                                <p className="m-25">Common (750-1111) - 0.5 $CHI </p>
                            </div>
    
                        </div>
                    </div>
                </div>
                <h2>Team</h2>
                <div className="p4 stack1 clearfix w-1200">
                    <div className="one">
                        <div className="team-stack">
                            <a target="_blank" href="https://twitter.com/Slim_Billions" rel="noreferrer">
                                <img src="images/team-pic-2.png" className="hvr-push" /></a>
                            <p className="">Slim</p>
                            <p className="">Projekt Owner</p>
                            <div className=""><a target="_blank" href="https://twitter.com/Slim_Billions" className="css-0" rel="noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                        color="#1DA1F2" style={{color: '#1DA1F2' }} xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                        <div className="team-stack">
                            <a target="_blank" href="https://twitter.com/NorCalTommy" rel="noreferrer">
                                <img src="images/team-pic-1.png" className="hvr-push" /></a>
                            <p className="">Tommy</p>
                            <p className="">Co-Founder</p>
                            <div className=""><a target="_blank" href="https://twitter.com/NorCalTommy" className="css-0" rel="noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                        color="#1DA1F2" style={{color: '#1DA1F2' }} height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="three">
                        <div className="team-stack">
                            <a target="_blank" href="https://twitter.com/jdot_alex" rel="noreferrer">
                                <img src="images/team-pic-3.png" className="hvr-push" /></a>
                            <p className="">Jaydot</p>
                            <p className="">Community Manager</p>
                            <div className=""><a target="_blank" href="https://twitter.com/jdot_alex" className="css-0" rel="noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                        color="#1DA1F2" style={{color: '#1DA1F2' }} height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="four">
                        <div className="team-stack">
                            <a target="_blank" href="https://twitter.com/ProjektParadise" rel="noreferrer">
                                <img src="images/dev-image-f.png" className="hvr-push" /></a>
                            <p className="">The Dev Team</p>
                            <p className="">& Blockchain Specialists</p>
                            <div className=""><a target="_blank" href="https://twitter.com/ProjektParadise" className="css-0" rel="noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                        color="#1DA1F2" style={{color: '#1DA1F2' }} height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>FAQ</h2>
                <div className="p1 stack1 clearfix w-800">
                    <div className="one">
                        <div className="one m-inside-faq">
                            <button className="accordion">What can I do with my $Chi?</button>
                            <div className="panel">
                                <p>Use $Chi to free targeted Nfts from detainment, playing Dojo Games which allow to
                                    multiply $Chi, Auctions with $Chi, and of course Alpha Chat will grow to be very well
                                    known as we develop.</p>
                            </div>
    
                            <button className="accordion">How many Projekt Paradise are there?</button>
                            <div className="panel">
                                <p>Gen 0 is a deflationary collection of 1,111 warrioress.<br />
                                    Gen 1 will consist of 555 Ronin Warrior.<br />
                                    Gen 2 Are Very scarce….More research and development will be discovered though past
                                    gens.</p>
                            </div>
    
                            <button className="accordion">What's this meditation thing about?</button>
                            <div className="panel">
                                <p>Stake/meditate Earn a base of 4 $Chi Per day while staking… This is prior to rarity and
                                    emissions bonuses!</p>
                            </div>
    
                            <button className="accordion">How does the summoning/breeding work?</button>
                            <div className="panel">
                                <p>You will need 1 Warrioress + 1000 $Chi To summon 1 Ronin.<br />
                                    You will also receive full access to Dojo as a Genesis Holder.</p>
                            </div>
    
                            <button className="accordion">What's next?</button>
                            <div className="panel">
                                <p>Gen 2 will be introduced Q3… Cant forget about building dojos to reach a higher conscious
                                    levels and harvest more $Chi!.</p>
                            </div>
    
                            
                        </div>
                    </div>
                </div>
                <div className="p1 stack1 clearfix center button-c-3">
    
                    <a target="_blank" href="https://discord.gg/CTUv8TBpNZ" rel="noreferrer">
                        <button type="button" className="three-4 hvr-pop">Discord</button>
                    </a>
    
                    <a target="_blank" href="https://twitter.com/Projektparadise " rel="noreferrer">
                        <button type="button" className="three-5 hvr-pop">Twitter</button>
                    </a>
                </div>
    
            </div>
        </div>
    )
}

export default HomeComponent;