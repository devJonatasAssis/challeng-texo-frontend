"use client";

import { useState } from "react";
import "./global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Menu from "@/components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html>
      <Head>
        <title>Texo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <body>
          <div className="container-wrapper">
            <Menu />
            <div className="content">{children}</div>
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
