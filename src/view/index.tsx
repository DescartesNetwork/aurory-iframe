import EmbededView from '@sentre/embeded-view'
import { useUI } from '@sentre/senhub'

import configs from 'configs'
import { useEffect } from 'react'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ dark: '#000', light: '#000' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={'https://app.aurory.io/'}
      title="Please replace the src and title to your original DApp."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
