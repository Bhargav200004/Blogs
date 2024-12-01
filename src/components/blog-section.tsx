import { Separator } from "@radix-ui/react-separator";


interface BlogSectionProps {
    serialNo: number;
    title: string;
    paragraph: string;
  }


export default function BlogSection({ serialNo, title, paragraph }: BlogSectionProps){

    return(
        <article key={serialNo} className="space-y-3">
        <h2 className="text-2xl font-semibold">{serialNo + 1 + "." + title}</h2>
        <p>
            {paragraph}
        </p>

        <Separator />
      </article>
    );
}