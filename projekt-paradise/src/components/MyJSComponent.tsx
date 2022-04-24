import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import * as metadata from "@metaplex-foundation/mpl-token-metadata";
import axios from 'axios';



const connection = new web3.Connection(
    web3.clusterApiUrl('mainnet-beta'),
    'confirmed',
);

const MyJSComponent: React.FunctionComponent = (props) => {
  const publicKey = useWallet();
  return (
        <SelectionComponent pubKey={publicKey.publicKey?.toString()}/>
  )
};

class SelectionComponent extends React.Component<any,any> {
      constructor(props: any) {
        super(props);
        this.state = {
          loading: 'initial',
          data: [],
          pubKey: props.pubKey,
        };
    }
    
    loadData() {
        const promise = metadata.Metadata.findDataByOwner(connection, this.state.pubKey || '').then(async (resp: any[]) =>{
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
        .then((data: any) => {
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
                  return <img style={{ padding: '10px', cursor: 'pointer', height: '200px', width: '200px' }} src={`${item.data.image}`} alt="" key={item.data.image} />
                })}
              </div>
            </>);
          }
      }
}

export default MyJSComponent;

