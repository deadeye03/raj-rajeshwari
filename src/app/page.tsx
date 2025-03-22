import { getAllCategories } from "@/sanity/queries";
import Categories from "@/section/Categories";
import Hero from "@/section/Hero";
import Link from "next/link";

export default async function HomePage() {
  const categories: CategoriesProps[] = await getAllCategories();
  return (
    <div className=" bg-white">
      <Hero />
      <Categories categories={categories} />
    </div>
  );
}
