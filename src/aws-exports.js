import Amplify, { Auth } from 'aws-amplify'

// SOURCE: https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:50a77b4a-7599-4b9b-80d4-c3518db60d17',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',
    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'us-east-2',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_v8U5pXZ2W',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '2b7prrsq6qed09f0lq06oghno8'
  }
})

// You can get the current config object
const currentConfig = Auth.configure()
export default currentConfig
