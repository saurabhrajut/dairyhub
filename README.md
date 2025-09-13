# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deploying to Vercel

To deploy this project to Vercel, you need to set up the environment variables.

1.  Go to your Vercel project dashboard.
2.  Navigate to **Settings** > **Environment Variables**.
3.  Add the following variables with their corresponding values from the `.env` file in this project:

    - `NEXT_PUBLIC_FIREBASE_API_KEY`
    - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
    - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
    - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
    - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
    - `NEXT_PUBLIC_FIREBASE_APP_ID`
    - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
    - `GEMINI_API_KEY`

After adding these variables, re-deploy your project.
