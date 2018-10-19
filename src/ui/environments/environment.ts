import { PaypalEnv } from '@mte/common/config/paypal-env'

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4000',
  brand_name: 'Hyzer Shop',
  developer_email: 'd.a.mayer92@gmail.com',
  organization_email: 'danny@hyzershop.com',
  aws_bucket: 'hyzershop',
  aws_region: 'us-east-1',
  blog_root: 'blog',
  client_url: 'http://localhost:3000',
  cloudfront_url: 'https://d1eqpdomqeekcv.cloudfront.net/production',
  paypal_env: PaypalEnv.Sandbox,
  google_analytics_tracking_code: '',
  stripe_publishable_key: 'pk_test_rz5tt18zJDXs4vZ4AFjW6uC2',
  instagram_user_id: 2256915511,
}
