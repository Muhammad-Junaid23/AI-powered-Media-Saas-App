# 🤖 IMAGINERA — AI-Powered Media SaaS App

Imaginera — the ultimate AI-powered platform for media transformation. This project is a powerful demonstration of how cutting-edge AI can be seamlessly integrated into a professional, secure, and responsive web application.

With features like AI image restoration, background removal, generative fill, recoloring, and smart object removal, users can transform media effortlessly. A credit-based system with Stripe payments, community gallery, and advanced search make the experience smooth, secure, and engaging.

This project is perfect for:

- 🚀 Developers who want to learn how to build AI-driven SaaS apps (Next.js + Cloudinary + Clerk + Stripe + MongoDB).

- 🎨 Creators who want an intuitive AI image tool for fast, high-quality transformations.

## 💻 Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## ✨ Features

- **Authentication and Authorization**: Secure user access with registration, login, and route protection.

- **Community Gallery**: A public gallery featuring transformed images with pagination for easy browsing

- **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

- **Image Restoration**: Revive old or damaged images effortlessly

- **Image Recoloring**: Customize images by replacing objects with desired colors easily

- **Image Generative Fill**: Fill in missing areas of images seamlessly

- **Object Removal**: Clean up images by removing unwanted objects with precision

- **Background Removal**: Extract objects from backgrounds with ease

- **Download Transformed Images**: Save and share AI-transformed images conveniently

- **Transformed Image Details**: View details of transformations for each image

- **Transformation Management**: Control over deletion and updates of transformations

- **Credits System**: Earn or purchase credits for image transformations

- **Profile Page**: Access transformed images and credit information personally

- **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

- **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

and many more, including code architecture and reusability

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Muhammad-Junaid23/AI-powered-Media-Saas-App.git
cd AI-powered-Media-Saas-App
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- Thanks to the developers of Next.js, Clerk, Cloudinary, and all other technologies used in this project.

- A shout-out to the open-source community for their invaluable resources and support.
