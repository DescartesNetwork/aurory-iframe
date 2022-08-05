import { useEffect } from 'react'
import { net, useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ dark: '#000000', light: '#000000' })
  }, [setBackground])

  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      appId={appId}
      src={'https://app.aurory.io'}
      title="A free-to-play, tactical, turn-based JRPG built on the Solana blockchain."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
