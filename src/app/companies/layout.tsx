import PageHeader from "@/components/common/PageHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <PageHeader />
      <div>{children}</div>
    </div>
  );
}
