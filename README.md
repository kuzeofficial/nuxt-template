# 🌟 Nuxt 3 Template - Your Gateway to Modern Web Development 🌟

Welcome to our Nuxt 3 Template! This is more than just a starting point for your web projects; it's a gateway to creating something truly remarkable. 🚀

## Stack Used 📚

This template is built with love and care, using some of the most efficient and modern technologies:

- **Nuxt 3**: The intuitive Vue framework
- **Tailwind CSS**: For stylish and responsive designs
- **ESLint & Prettier**: To keep our code clean and beautiful
- **Vitest**: To ensure everything works as expected
- **ShacnUI**: To pretty compoments
- **Husky**: To keep everything working after commit
- **Pinia**: To store and consult your things globally
- **Lucide**: For icons
- **VeeValidate**: To carry your forms to the next level of validations with `zod`

## Commands 🛠️

Here's how you can get started:

🖤 We recommend using [bun](https://bun.sh/) for all commands

### Setting Up

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Running the Development Server
```bash
# Start the server at http://localhost:3000
npm run dev
# or
pnpm run dev
# or
yarn dev
# or
bun run dev
```

### Building for Production
```bash
# Build your project
npm run build
# or
pnpm run build
# or
yarn build
# or
bun run build
```

### Previewing the Production Build
```bash
# Preview the production build
npm run preview
# or
pnpm run preview
# or
yarn preview
# or
bun run preview
```

## Recommendations 🌱
- Explore the [Nuxt 3 documentation](https://nuxt.com/docs/guide) to learn more about its capabilities.
- Tailor the Tailwind configuration in `tailwind.config.js` to match your design needs.
- Keep your code neat and tidy with ESLint and Prettier.
- Customize components to your liking. This project uses [shadcn-vue](https://www.shadcn-vue.com/) by default::
    - Customize the theme of the project with your own colors as explained in[this guide](https://www.shadcn-vue.com/docs/theming.html) . You can also use the [theme builder](https://www.shadcn-vue.com/themes.html)
    - This template includes all shadcn components updated to the current date. Feel free to add or remove components as needed. Simply manage the component's folder located at `components/ui/[COMPONENT_NAME]`
- Avoid manual imports for components. In Nuxt 3, components are automatically imported globally by default. This feature is recommended for use
- Use the subfix ```.nuxt.test``` to your tests, this would inject the test automatically with the nuxt context environment

## Contributing 🤝
Your contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
Commit your Changes (`git commit -m 'Add some AmazingFeature'`), recommend use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request