import PageHeader from "@/components/PageHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <PageHeader />
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
