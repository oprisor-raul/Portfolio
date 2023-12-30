import AppWrapper from "@/components/AppWrapper";
import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import BackButton from "@/components/common/BackButton";
import H1Text from "@/components/common/H1Text";
import TableOfProjects from "@/components/tables/TableOfProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Oprișor",
  description: "Projects of Oprisor Raul-Alexandru, Full Stack Developer",
};

export default function ProjectList() {
  return (
    <AppWrapper>
      <div className="lg:py-24">
        <BackButton description={"Oprișor Raul-Alexandru"} href={"/"} />
        <H1Text text={"Projects"} />
        <TableOfProjects />
        <CursorFollowerBackground />
      </div>
    </AppWrapper>
  );
}
