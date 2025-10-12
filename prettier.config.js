module.exports = {
  singleQuote: true,
  bracketSameLine: true,
  bracketSpacing: true,
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  importOrder: ['^@shared/(.*)$', '^@entities/(.*)$', '^@features/(.*)$', '^@widgets/(.*)$', '^@pages/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
