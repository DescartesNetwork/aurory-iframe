import { net } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      appId={appId}
      src={'https://app.aurory.io'}
      title="A free-to-play, tactical, turn-based JRPG built on the Solana blockchain."
      wallet={window.sentre.solana}
    />
  )
}

export default View
