import { client } from "./client";

export const getAllMenu = async () => {
    const query = `*[_type=='navbar'][0]{...}`;
    const data = await client.fetch(query);
    return data;
};

export const getAllCategories = async () => {
    const query = `*[_type == "categories"]{
     categoryName,
     categorySet,
     "imageUrl":image.asset->url
}`
    const data = await client.fetch(query)
    return data;
}

export const getFooterData = async () => {
    const query = `*[_type == "footer"][0]{
        title,
        expolore,
        help,
        categories
    }`
    const data: FooterSectionSchemaType = await client.fetch(query)
    return data
}