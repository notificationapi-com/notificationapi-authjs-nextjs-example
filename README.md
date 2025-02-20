# Customizing Auth.js Magic Link Authentication

This example demonstrates how to customize Auth.js's magic link authentication to use any email provider or notification service of your choice. While Auth.js provides built-in email providers, there are scenarios where you need more flexibility and control over the authentication emails.

In this example, we use [NotificationAPI](https://www.notificationapi.com) to demonstrate the integration, but you can adapt the code to work with any email service provider, SMS gateway, or notification platform.

## Why Customize Magic Links?

This project shows how to:

- Replace Auth.js's default email providers with any notification service
- Manage email templates externally without code changes
- Track email delivery and engagement
- Implement custom logic in your authentication flow
- Handle magic link delivery through your preferred service

## Features

- ✨ Magic link authentication with custom provider support
- 📧 Flexible email handling (using [NotificationAPI](https://www.notificationapi.com) in this example)
- 🎨 External template management
- 📊 Delivery tracking capabilities
- 🔒 Secure authentication with Auth.js
- 🗄️ Persistent sessions with Prisma

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/notificationapi-com/notificationapi-authjs-nextjs-example
   cd notificationapi-authjs-nextjs-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in `.env`:

   ```env
   # Auth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=[your-secret]

   # Your email provider credentials
   # In this example, we use NotificationAPI:
   NOTIFICATIONAPI_CLIENT_ID=[your-client-id]
   NOTIFICATIONAPI_CLIENT_SECRET=[your-client-secret]
   ```

4. Set up your database:

   ```bash
   npx prisma db push
   ```

5. Configure your email provider:

   - For this example using [NotificationAPI dashboard](https://app.notificationapi.com), create a "magic_link" template with:
     - `{{magic_link}}`: The authentication URL in the email body
   - For other providers, adapt the configuration in `[...nextauth]/route.ts`

6. Run the development server:
   ```bash
   npm run dev
   ```

## How It Works

1. User requests to sign in with email
2. Auth.js generates a secure magic link
3. Custom email provider sends the magic link (in this example, through [NotificationAPI](https://www.notificationapi.com))
4. Provider handles email delivery and tracking
5. User clicks the link and gets authenticated
6. Auth.js manages the session

## Key Files

- `app/api/auth/[...nextauth]/route.ts`: Auth.js configuration with custom email provider implementation
- `app/page.tsx`: Main page with sign-in/sign-out functionality
- `prisma/schema.prisma`: Database schema for Auth.js

## Learn More

- [Auth.js Documentation](https://authjs.dev)
- [Auth.js Email Provider API](https://authjs.dev/reference/core/providers_email)
- [Next.js Documentation](https://nextjs.org/docs)
- [NotificationAPI Documentation](https://docs.notificationapi.com) (used in this example)

## License

MIT
