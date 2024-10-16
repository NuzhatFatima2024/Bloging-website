

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Button } from "../app/compoents/button";
import Link from "next/link";
import "animate.css";


export default function Home() {
  return (
    <>
     

      <div className="flex justify-center items-center flex-col bg-yellow ">
        <div
          className="image-bg flex justify-center items-center w-full min-h-[300px] sm:min-h-[600px] flex-wrap "
          
        > <Image
        src="/ba.png"
        alt="Blog Post"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: -1 }}
      />
          <div className=" text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-center p-2 color: white">
            <h1 className="bounce-in-fwd  border-t-2 border-b-2 border-blue justify-center color: white">
             Savor & Spice
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-16 mb-16">
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/biryani.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
            Biryani
            </h2>
            <p className="text-gray-700 mt-1">
           
Biryani is a flavorful and aromatic rice dish, originating from the Indian subcontinent, that blends fragrant basmati rice with marinated meat (like chicken, mutton, or beef), spices, and sometimes vegetables. Cooked with layers of meat, rice, and spices like saffron, cumin, and cardamom, biryani is known for its rich, complex flavors. It’s often served with raita (yogurt sauce) or salad, making it a beloved dish in South Asian cuisine, celebrated for its regional variations 
</p> <Link href={"/posts/biryani"}>
            <Button  className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/kabab.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
           Kabab
            </h2>
            <p className="text-gray-700 mt-1">
            Kabab is a popular dish made of marinated meat, typically grilled or roasted. The meat, which can include beef, chicken, lamb, or fish, is seasoned with a variety of spices like cumin, coriander, garlic, and ginger. Kababs are often skewered and cooked over an open flame or grill, giving them a smoky flavor. They come in many forms, such as **Seekh Kababs** (minced meat shaped on skewers), **Shami Kababs** (pan-fried patties), and **Chapli Kababs** (spicy, flat patties). Kababs are enjoyed worldwide and are commonly served with naan, chutney, or salad.
            </p><Link href={"/posts/kabab"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md  hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/karahi.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
      Karahi</h2>
            <p className="text-gray-700 mt-1">
            **Karahi** is a popular and flavorful dish from South Asia, named after the deep, circular pan (called a "karahi") in which it's cooked. Typically made with chicken, mutton, or beef, karahi is known for its bold and spicy flavors. The dish is prepared by stir-frying meat in a mixture of tomatoes, ginger, garlic, and various aromatic spices like cumin, coriander, and red chili flakes. It’s often garnished with fresh cilantro, green chilies, and ginger slices. Karahi is usually served with naan, roti, or rice and is a favorite in Pakistani and Indian cuisine for its rich and savory taste.
            </p><Link href={"/posts/karahi"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/shami.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
             Shami Kabab
            </h2>
            <p className="text-gray-700 mt-1">
            **Shami Kabab** is a type of pan-fried, minced meat patty that originates from South Asian cuisine, especially popular in Pakistan and India. Made from ground beef, mutton, or chicken, the meat is cooked with yellow split chickpeas (chana dal) and a blend of spices such as cumin, garam masala, cloves, and cinnamon. Once the mixture is cooked and cooled, it is finely ground, shaped into patties, and often stuffed with a small amount of egg or coriander. These patties are then shallow-fried until golden brown.

Shami Kababs are known for their soft, melt-in-the-mouth texture and are typically served with chutney, salad, or used in sandwiches. They are a popular choice for appetizers, snacks, or even as part of a main meal.
</p>
<Link href={"/posts/shami kabab"}>       
                 <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>

          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/tandori chicken.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
            Tandori Chicken     </h2>
            <p className="text-gray-700 mt-1">
            Tandoori Chicken is a popular dish in Indian cuisine, known for its vibrant color and smoky flavor. The chicken is marinated in a mixture of yogurt and a variety of spices, including turmeric, cumin, coriander, and garam masala, along with garlic and ginger. The marination process tenderizes the chicken and infuses it with rich flavors.

Traditionally, tandoori chicken is cooked in a tandoor, a cylindrical clay oven that uses charcoal for heating. The high temperature of the tandoor helps achieve a crispy exterior while keeping the meat juicy and tender on the inside. 
</p>
 <Link href={"/posts/tandori chicken"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/tikka.png"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
             Tikka</h2>
            <p className="text-gray-700 mt-1">
            Tikka refers to small pieces or chunks of marinated meat (usually chicken, lamb, or fish) that are grilled or baked, often served as an appetizer or part of a main dish. The marination typically includes yogurt, spices like cumin, coriander, turmeric, and red chili powder, along with ginger and garlic paste, which tenderizes the meat and infuses it with rich flavors.

The marinated meat is usually skewered and cooked in a tandoor (clay oven) or on a grill, giving it a smoky aroma and charred exterior. One of the most popular variations is Chicken Tikka, which is often served with mint chutney, onion rings, and lemon wedges.
          </p>  <Link href={"/posts/tikka"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
}