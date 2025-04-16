import { type SchemaTypeDefinition } from 'sanity'
import { navMenuType } from './navMenu'
import { categoriesType } from './categories'
import { FooterType } from './Footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navMenuType,
    categoriesType,
    FooterType
  ],
}
