import AppWrapper from "@/components/AppWrapper";
import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Oprișor",
  description: "Projects of Oprisor Raul-Alexandru, Full Stack Developer",
};

export default function ProjectList() {
  return (
    <AppWrapper>
      <div className="lg:py-24">
        <p>Project</p>
        <CursorFollowerBackground />
      </div>
    </AppWrapper>
  );
}
