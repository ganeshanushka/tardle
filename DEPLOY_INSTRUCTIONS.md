# Deploying Cloud Functions to Firebase

## Step-by-Step Guide

### 1. Verify Setup ✓
- Firebase CLI installed (version 14.24.2)
- Project configured: `tardle-c0c26`
- Dependencies installed in `functions/` directory

### 2. Deploy Functions

Run this command from the project root:

```bash
firebase deploy --only functions
```

Or from the functions directory:

```bash
cd functions
npm run deploy
```

### 3. What Will Be Deployed

The following Cloud Functions will be deployed:

- `sendPasswordResetCode` - Sends password reset verification code via email
- `verifyPasswordResetCode` - Verifies the code and generates reset token
- `resetPasswordWithToken` - Resets password using verified token

Plus any existing functions:
- `sendDailyTardleEmail`
- `sendVerificationCode`
- `sendEmailChangeVerification`
- `findUserByVerificationCode`
- `completeEmailChange`
- `markEmailVerified`
- `cleanupUnverifiedAccounts`
- `checkUsernameAvailability`

### 4. Deployment Process

When you run the deploy command:

1. **Build**: Firebase will compile your functions
2. **Upload**: Functions are uploaded to Firebase
3. **Deploy**: Functions are deployed to the cloud
4. **URLs**: You'll receive HTTPS URLs for each function

### 5. Verify Deployment

After deployment, you can:

- Check function status: `firebase functions:list`
- View logs: `firebase functions:log`
- Test functions in Firebase Console → Functions

### 6. Expected Output

You should see output like:

```
✔  functions[sendPasswordResetCode(us-central1)] Successful update operation.
✔  functions[verifyPasswordResetCode(us-central1)] Successful create operation.
✔  functions[resetPasswordWithToken(us-central1)] Successful create operation.
```

### Troubleshooting

If you encounter errors:

1. **Syntax errors**: Check `functions/index.js` for JavaScript errors
2. **Missing dependencies**: Run `cd functions && npm install`
3. **Permission errors**: Make sure you're logged in: `firebase login`
4. **Quota issues**: Check Firebase Console for quota limits

