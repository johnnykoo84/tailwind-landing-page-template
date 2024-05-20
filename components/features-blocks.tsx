import items from "./items";
import Image from "next/image";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-bold text-3xl text-center m-4">기능 알아보기</h2>
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Items */}
          {items?.length &&
            items.map((item) => (
              <div
                key={item.id}
                className="text-center p-4 border-2 border-gray-200 w-300 h-300"
              >
                <Image
                  src={item.imgSrc}
                  alt="image"
                  width={48}
                  height={48}
                  className="block mx-auto"
                />
                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                <p className="text-left mt-4">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
