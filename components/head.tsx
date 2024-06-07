import Head from "next/head";

export default function MetaTagComponent() {
  return (
    <Head>
      <title>Your Website Title</title>
      <meta property="og:title" content="Kooslab CLM" key="title" />
      <meta
        property="og:description"
        content="추적하기 어렵고 복잡한 계약서 검토 업무, Kooslab CLM으로 계약서를 정확하고 빠르게 검토하세요."
      />
      <meta
        property="og:image"
        content="https://clm.kooslab.net/images/koala.png"
      />
      <meta property="og:url" content="https://clm.kooslab.net" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
