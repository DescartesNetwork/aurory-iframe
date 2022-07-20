import { Col, Row, Space, Typography } from 'antd'

const MainnetOnly = () => {
  return (
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Space direction="vertical">
          <Typography.Title level={2} style={{ color: '#273852' }}>
            ⚠️ Only supported on Solana mainnet.
          </Typography.Title>
          <Typography.Text style={{ color: '#273852' }}>
            You can open the Control Center, switch to mainnet and experience
            the application.
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  )
}

export default MainnetOnly
