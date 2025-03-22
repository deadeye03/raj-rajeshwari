import { type SchemaTypeDefinition } from 'sanity'
import { navMenuType } from './navMenu'
import { categoriesType } from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navMenuType,
    categoriesType
  ],
}
