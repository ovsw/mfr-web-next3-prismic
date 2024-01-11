import SharedRootLayout from "@/components/SharedRootLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedRootLayout lang="en">{children}</SharedRootLayout>;
}
