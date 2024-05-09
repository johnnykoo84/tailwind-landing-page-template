import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              복잡한 계약 업무
              <br />
              <span className="text-blue-500">
                아직도 파일을 주고받으시나요?
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-2xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                온라인 계약서 변경 사항 논의와 검토 담당자 지정으로 계약서 업무
                시간을 획기적으로 줄여보세요.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    계약서 검토하기
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    자세히 알아보기
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="https://youtu.be/ctN2RR3948c?si=4a1aT6tgsX1d7-zG&t=12"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          {/* Hero image replaced with image and text */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center mb-12">
              <img
                src={"https://i.imgur.com/2jVKMHq.png"}
                alt="Image description"
                className="w-full sm:w-1/2 h-auto border border-gray-300"
              />
              <p className="text-xl sm:text-2xl leading-normal ml-8">
                갑과 을간 계약서 협의 시, 서로 수정하고 수정된 내용 표시하는 것
                너무 피곤하죠. 심지어 어떤 담당자는 수정된 내용을 표시하지도
                않아 의도치 않은 함정을 만들기도 합니다. 이렇게 모든 변경 내용
                표시와 제안 내용을 서로가 명확하게 확인할 수 있게 작성하는 것은
                너무 어렵고 손이 많이 갑니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-12">
              <img
                src={"https://i.imgur.com/EVROvvN.png"}
                alt="Image description"
                className="w-full sm:w-1/2 h-auto border border-gray-300"
              />
              <p className="text-xl sm:text-2xl leading-normal ml-8">
                우리는 모두 이렇게 계약서 파일을 관리해 본 적이 있습니다.
                아니라고 하지 마세요. 파일 이름 정하는 것도 어렵고, 파일
                저장했지만 어디에 보관해두었는지 기억도 나지 않지요. 그리고
                누군가 파일을 수정하고 저장했지만, 수정된 내용을 다른 사람들과
                공유하지 않았다면? 이런 경우가 종종 있죠.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-12">
              <img
                src={"https://i.imgur.com/HfOKv5d.png"}
                alt="Image description"
                className="w-full sm:w-1/2 h-auto border border-gray-300"
              />
              <p className="text-xl sm:text-2xl leading-normal ml-8">
                수정된 계약서 파일은 심지어 이메일로 주고 받게 됩니다. 종종
                실수로 이전 버전의 계약서 파일을 보내기도 하고, 또는 첨부 파일을
                깜짝 할 때도 있죠. 이런 경우에는 누군가 실수로 수정된 내용을
                놓치게 되어 계약서 변경 사항을 놓치게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
