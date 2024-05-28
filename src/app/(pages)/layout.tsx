import ChildrenLayout from "@/components/ui/layout/layout";
import Navbar from "@/components/ui/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TourMaster B2C",
  description: "TourMaster B2C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <ChildrenLayout>
        {children}
      </ChildrenLayout>
    </div>
  );
}
