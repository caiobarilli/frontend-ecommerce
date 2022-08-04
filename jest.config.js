module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!**/src/types/**/*.d.ts/**',
    '!**/src/pages/**/*.tsx/**',
    '!**/src/styles/**/*.ts/**',
    '!**/src/graphql/**/*.ts/**',
    '!**/src/utils/**/*.ts/**',
    '!**/src/**/mock.ts/**',
    '!**/src/**/stories.tsx/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
