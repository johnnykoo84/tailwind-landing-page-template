import "./css/style.css";

import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "계약서 리뷰 검토 관리 솔루션",
  description:
    "수정 이력 추적이 어렵고, 누가 현재 검토 중인지 알기 어려운 블랙홀같은 계약서 관리 업무를 해결해주는 클라우드 도구를 만들고 있습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
