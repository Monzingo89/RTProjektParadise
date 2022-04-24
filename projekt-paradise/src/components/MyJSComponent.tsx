import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import * as metadata from "@metaplex-foundation/mpl-token-metadata";
import axios from 'axios';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const connection = new web3.Connection(
  web3.clusterApiUrl('mainnet-beta'),
  'confirmed',
);

class MyJSComponent extends React.Component<any,any> {
      constructor(props: any) {
        super(props);
        this.state = {
          loading: true,
        };
    }

    render() {
        if(!this.state.loading && !this.state.imageForRoom){
          return ( 
            <>
              <WalletGetter />  
            </>);
        } else{
          return ( 
            <>
                <WalletGetter /> 
            </>);
        }
    }
}

export const WalletGetter = () => {
const { publicKey } = useWallet();

return (
  <>
    <div style={{paddingRight: '30px', paddingTop:'20px', float: 'right'}}>
      <WalletMultiButton />
    </div>
    {!publicKey?.toString() ? <></> : <NFTDisplay pubKey={publicKey.toString()} />}
    <h2 style={{color: 'white', paddingLeft: '20px', paddingTop:'10px', fontFamily: 'cursive', cursor: 'pointer'}}>Go Back</h2>
  </>
);
};

export class NFTDisplay extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    console.log(props);
    this.state = {
      loading: 'initial',
      data: [],
      pubKey: props.pubKey.toLocaleString(),
    };
}

loadData() {
    const promise = metadata.Metadata.findDataByOwner(connection, this.state.pubKey).then(async (resp) =>{
            return await this.getImageForEachString(resp)
    });
    return promise;
}

async getImageForEachString(resp: any[]) {
    const promiseList: any[] = [];
    resp.forEach(async nft => {
        promiseList.push(axios.get(nft.data.uri));
    })
    
    const bar = await Promise.all(promiseList);
    return bar;
}

componentDidMount() {
    this.setState({ loading: 'true' });
    this.loadData()
    .then((data) => {
      this.setState({
        data: data,
        loading: 'false'
      });
    });
  }  

  render() {
    if (this.state.loading === 'initial') {
        return ( <>
          <h2 style={{color: 'white', paddingLeft: '20px', paddingTop:'10px', fontFamily: 'cursive', cursor: 'pointer'}}>INITIALIZING</h2>
        </>);
      }

      if (this.state.loading === 'true') {
        return ( <>
            <h2 style={{color: 'white', paddingLeft: '20px', paddingTop:'10px', fontFamily: 'cursive', cursor: 'pointer'}}>LOADING NFTs</h2>
          </>);
      }
      
      if(this.state.loading === 'false'){
        return ( <>
          <div className='container' style={{ borderStyle: 'dashed', borderColor: 'purple' }}>
            {this.state.data.map((item: { data: { image: React.Key | null | undefined; }; }) => {
              return <img style={{ padding: '10px', cursor: 'pointer', height: '200px', width: '200px' }} className='nftSyle' src={`${item.data.image}`} alt="" key={item.data.image} />
            })}
          </div>
        </>);
      }
  }
}

  export default MyJSComponent;