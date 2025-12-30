export default function QRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  )
}

