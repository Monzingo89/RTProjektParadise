import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import * as metadata from "@metaplex-foundation/mpl-token-metadata";
import axios from 'axios';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Paper, Grid, ButtonBase, Typography, styled } from '@mui/material';

const connection = new web3.Connection(
  web3.clusterApiUrl('mainnet-beta'),
  'confirmed',
);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

class MyJSComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    if (!this.state.loading && !this.state.imageForRoom) {
      return (
        <>
          <WalletGetter />
        </>);
    } else {
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
      <div style={{ paddingRight: '30px', paddingTop: '20px', float: 'right' }}>
        <WalletMultiButton />
      </div>
      {!publicKey?.toString() ? <></> : <NFTDisplay pubKey={publicKey.toString()} />}
    </>
  );
};

export class NFTDisplay extends React.Component<any, any> {
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
    const promise = metadata.Metadata.findDataByOwner(connection, this.state.pubKey).then(async (resp) => {
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
        console.log(data)
        this.setState({
          data: data,
          loading: 'false'
        });
      });
  }

  render() {
    if (this.state.loading === 'initial') {
      return (<>
        <h2 style={{ color: 'black', paddingLeft: '20px', paddingTop: '10px', fontFamily: 'cursive', cursor: 'pointer' }}>Loading Placeholder</h2>
      </>);
    }

    if (this.state.loading === 'true') {
      return (<>
        <h2 style={{ color: 'black', paddingLeft: '20px', paddingTop: '10px', fontFamily: 'cursive', cursor: 'pointer' }}>Loading Placeholder</h2>
      </>);
    }
    if (this.state.loading === 'false') {
      return (

        this.state.data.map((item) => (
          <div style={{marginBottom: '10px'}} key={item.name}>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 800,
                maxHeight: 500,
                flexGrow: 1,
                color: '#FFFFFF',
                backgroundColor: (theme) =>
                  '#1A2027',
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={item.data.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        {item.data.collection?.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.data.description}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography> */}
                    </Grid>
                    <Grid item>
                      <a href={item.data.external_url} target='_blank' rel='noreferrer'>
                        <Typography sx={{ cursor: 'pointer', color: '#ADD8E6' }} variant="body2">
                          Visit Site
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      Floor Price: $ Coming Soon
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>

        ))
      );
    }
  }
}

export default MyJSComponent;