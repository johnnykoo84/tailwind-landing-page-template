export const metadata = {
  title: "Kooslab CLM 계약서 리뷰 검토 관리 솔루션",
  description:
    "수정 이력 추적이 어렵고, 누가 현재 검토 중인지 알기 어려운 블랙홀같은 계약서 관리 업무를 해결해주는 클라우드 도구를 만들고 있습니다.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import MetaTagComponent from "@/components/head";

export default function Home() {
  return (
    <>
      <MetaTagComponent />
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
