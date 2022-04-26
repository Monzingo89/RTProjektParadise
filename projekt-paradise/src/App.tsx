
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import HomeComponent from './components/HomeComponent';
import { Link } from 'react-router-dom';
import NFTHoldingsComponent from './components/NFTHoldingsComponent';
import { FooterComponent } from './components/FooterComponent';


export function App(): JSX.Element | null {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path='holders' element={<NFTHoldingsComponent />} />
            </Routes>
        </>
    )
}

function Navbar(this: any) {
    const navigate = useNavigate();
    
    return (
        <header className="header-fixed nav-left clearfix">
        <div className="navclosed">
            <div className="line-nav-1"></div>
            <div className="line-nav-2"></div>
            <div className="line-nav-3"></div>
            <div className="line-nav-4"></div>
        </div>
        <div className="close-side"><a href="#"></a></div>

        <div className="p8 stack1 clearfix">
            <div className="one">
                <div className="chakra-stack css-icon-2">
                    <a target="_blank" className="chakra-link css-top-icon" href="https://t.co/BnMM7yG5GL" role="group" rel="noreferrer"><svg
                            viewBox="0 0 24 24" focusable="false" className="chakra-icon css-s1"><svg stroke="currentColor"
                                fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="24px" width="24px"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                </path>
                            </svg> </svg></a>
                    <a className="chakra-link css-top-icon" role="group"><svg viewBox="0 0 24 24" focusable="false"
                            className="chakra-icon css-s2"><svg viewBox="0 0 119 73" focusable="false"
                                className="chakra-icon css-n059si">
                                <path fill="currentColor"
                                    d="M84.1666 19.0568L91.1116 27.2168C91.9066 28.1333 92.6116 28.8872 92.8966 29.3159C94.9736 31.38 96.1383 34.1698 96.1366 37.0768C95.9416 40.5063 93.7066 42.842 91.6366 45.3402L86.7766 51.0463L84.2416 54.0028C84.1506 54.1048 84.092 54.2308 84.0729 54.3652C84.0538 54.4997 84.0751 54.6367 84.1341 54.7593C84.1932 54.882 84.2874 54.9849 84.4051 55.0554C84.5228 55.1259 84.6589 55.1608 84.7966 55.1559H110.132C114.002 55.1559 118.877 58.4081 118.592 63.3455C118.584 65.5896 117.676 67.7395 116.065 69.3263C114.455 70.9132 112.274 71.8081 109.997 71.8159H70.3216C67.7116 71.8159 60.6916 72.0968 58.7266 66.1098C58.3087 64.8588 58.2516 63.5179 58.5616 62.2368C59.1327 60.3423 60.0364 58.5611 61.2316 56.9742C63.2266 54.0176 65.3866 51.0611 67.5166 48.1933C70.2616 44.4385 73.0816 40.802 75.8566 36.9733C75.9551 36.8487 76.0086 36.6952 76.0086 36.5372C76.0086 36.3792 75.9551 36.2257 75.8566 36.1011L65.7766 24.275C65.7109 24.1893 65.6259 24.1198 65.5283 24.0719C65.4307 24.024 65.3231 23.9991 65.2141 23.9991C65.1051 23.9991 64.9975 24.024 64.8999 24.0719C64.8023 24.1198 64.7173 24.1893 64.6516 24.275C61.9516 27.8672 50.1316 43.7733 47.6116 46.9959C45.0916 50.2185 38.8816 50.3959 35.4466 46.9959L19.6816 31.4002C19.5809 31.3007 19.4525 31.2328 19.3126 31.2053C19.1727 31.1777 19.0276 31.1918 18.8958 31.2456C18.7641 31.2995 18.6515 31.3907 18.5724 31.5077C18.4933 31.6247 18.4513 31.7623 18.4516 31.9028V61.8968C18.4887 64.0252 17.8492 66.1118 16.6226 67.864C15.396 69.6163 13.6438 70.9464 11.6116 71.6681C10.3131 72.1134 8.92534 72.2464 7.56408 72.0559C6.20281 71.8655 4.90748 71.357 3.78609 70.573C2.6647 69.789 1.74975 68.7521 1.11752 67.5489C0.485298 66.3456 0.154123 65.0109 0.151611 63.6559V9.72894C0.241987 7.78555 0.951544 5.91965 2.17946 4.39639C3.40737 2.87313 5.09117 1.76999 6.99161 1.24372C8.62177 0.815714 10.3378 0.819997 11.9657 1.25613C13.5937 1.69226 15.0757 2.54475 16.2616 3.7272L40.5016 27.6455C40.5741 27.7181 40.662 27.7742 40.759 27.8096C40.8559 27.845 40.9596 27.859 41.0627 27.8506C41.1658 27.8421 41.2657 27.8114 41.3554 27.7606C41.445 27.7098 41.5223 27.6402 41.5816 27.5568L58.8016 4.0672C59.5974 3.11361 60.595 2.34299 61.7247 1.80931C62.8544 1.27562 64.0889 0.991771 65.3416 0.977634H110.132C111.357 0.979625 112.569 1.23953 113.684 1.73996C114.8 2.24039 115.794 2.96982 116.601 3.87946C117.407 4.7891 118.008 5.85797 118.361 7.01461C118.715 8.17124 118.814 9.38896 118.652 10.5863C118.336 12.6634 117.267 14.5572 115.642 15.9164C114.017 17.2756 111.948 18.008 109.817 17.9776H84.7366C84.6106 17.9807 84.4877 18.0169 84.3807 18.0827C84.2737 18.1484 84.1866 18.2412 84.1284 18.3514C84.0702 18.4616 84.043 18.5852 84.0498 18.7092C84.0565 18.8333 84.0968 18.9533 84.1666 19.0568Z">
                                </path>
                            </svg> </svg></a>
                    <a target="_blank" className="chakra-link css-top-icon" href="https://twitter.com/ProjektParadise"
                        role="group" rel="noreferrer"><svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-s3"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fillRule="nonzero"
                                        d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z">
                                    </path>
                                </g>
                            </svg> </svg></a>
                </div>
            </div>
            <div className="two-seven center">
                <nav className="nav">
            <ul className="nav-buttons nav-off">
                <li><Link to="/">Projekt Paradise</Link>
                </li>
                <li><a target="_blank" href="https://www.diamondvaults.io/vault/ProjektParadise" rel="noreferrer">Staking</a>
                </li>
                <li><a onClick={() => navigate("/")}><img className="header-center" src="images/pp.png" /></a>
                </li>
                <li><a target="_blank" href="https://magiceden.io/marketplace/projekt_paradise" rel="noreferrer">Marketplace</a>
                </li>
                <li><Link to="/holders">Holders Only</Link></li>
            </ul>
        </nav>
            </div>
            <div className="eight right">
                <a target="_blank"
                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb&outputAmount=0&fixed=in" rel="noreferrer">
                    <button type="button" className="button-right">Buy $CHI</button>
                </a>
                <div className="right-logo-mobile"><a target="_blank" className="" href="#"><img className=""
                            src="images/pp.png" /></a></div>

            </div>
        </div>
        </header>
       
      )
}  
