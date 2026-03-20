const technologies = {
  frontend: {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    react: 'React',
    astro: 'Astro',
    redux: 'Redux',
    zustand: 'Zustand',
    vue: 'Vue.js',
    next: 'Next.js',
    svelte: 'Svelte',
    graphql: 'GraphQL',
    axios: 'Axios',
    reactNative: 'React Native',
    scss: 'SCSS',
    sass: 'Sass',
    postcss: 'PostCSS',
    mui: 'Material UI',
    tailwindcss: 'Tailwind CSS',
    styled: 'Styled Components',
    framerMotion: 'Framer Motion',
  },
  backend: {
    go: 'Golang',
    python: 'Python',
    java: 'Java',
    nodeJs: 'Node.js',
    express: 'Express',
    nestjs: 'NestJS',
    fastify: 'Fastify',
    prisma: 'Prisma',
    graphQl: 'GraphQL',
    rest: 'REST APIs',
    websockets: 'WebSockets',
    jwt: 'JWT',
    oAuth: 'OAuth 2.0',
  },
  database: {
    postgres: 'PostgreSQL',
    mySql: 'MySQL',
    mongo: 'MongoDB',
    redis: 'Redis',
  },
  devops: {
    nginx: 'Nginx',
    docker: 'Docker',
    git: 'Git',
    github: 'GitHub',
    vite: 'Vite',
    webpack: 'Webpack',
    eslint: 'ESLint',
    prettier: 'Prettier',
    vscode: 'VS Code',
    figma: 'Figma',
    npm: 'npm',
    yarn: 'Yarn',
    pnpm: 'pnpm',
    bun: 'Bun',
    turbo: 'Turborepo',
    nx: 'Nx',
    markdown: 'Markdown',
    yaml: 'YAML',
    json: 'JSON',
  },
} as const

type Technologies = typeof technologies

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never
type AllTechnologies = UnionToIntersection<Technologies[keyof Technologies]>

const allTechnologies = Object.assign({}, ...Object.values(technologies)) as AllTechnologies

export { allTechnologies, technologies, type Technologies }
