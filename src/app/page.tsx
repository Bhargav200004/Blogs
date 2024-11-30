import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-7xl mb-8 tracking-tight font-bold text-center">
        Blogs
      </h1>

      <div className="border-2 rounded-sm shadow-sm space-y-8 p-4">
        {[1, 2, 3].map((i) => (
          <article key={i} className="space-y-3">
            <h2 className="text-2xl font-semibold">TITLE {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              debitis sequi incidunt ut dicta. Et aut sit, earum veniam, esse
              autem numquam illum dignissimos velit molestias, praesentium
              quidem debitis itaque?
            </p>

            <Separator />
          </article>
        ))}

        <div>
          <Button>Load more</Button>
        </div>
      </div>
    </main>
  );
}
