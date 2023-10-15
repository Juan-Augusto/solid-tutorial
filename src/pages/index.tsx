import { LearningSolidWithImages } from "@/Iframes/mainSolidPrinciples";
import { Card } from "@/components/Card";
import { HeadingText } from "@/components/Typography";
import { principlesOfSolid } from "@/constants/principlesDetails";
import { solidDefinitionsContent } from "@/constants/solidDefinitions";

export default function Home() {
  return (
    <>
      <HeadingText content="SOLID" />
      <LearningSolidWithImages />
      <div className="flex p-12">
        {solidDefinitionsContent.map((card, index) => {
          return (
            <Card
              title={card.title}
              description={card.description}
              key={index}
              link={card.link}
            />
          );
        })}
      </div>
      <div className="flex p-12">
        {principlesOfSolid.map((card, index) => {
          return (
            <Card
              title={card.title}
              description={card.description}
              key={index}
              buttonDescription="Exemplos"
              link={`examples/${card.examplesPath}`}
              target="_self"
            />
          );
        })}
      </div>
    </>
  );
}
